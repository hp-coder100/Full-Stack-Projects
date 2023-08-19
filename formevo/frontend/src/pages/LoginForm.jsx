import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import { useStateValue } from "../state/StateProvider";
import { axiosLogin } from "../apiservice/MyAxios";
function LoginForm({ setPopUpMsg, setPopUpShow, setLoading }) {
  const [state, dispatch] = useStateValue();
  const navigateTo = useNavigate();
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");

  const validate = () => {
    if (email === "" || password === "") {
      setError("All fields are required");
      return false;
    }
    let regex = new RegExp("[a-z0-9]+@[a-z]+.[a-z]{2,3}");
    if (!regex.test(email)) {
      setError("Email is not valid.");
      return false;
    }

    return true;
  };
  const loginUser = async (user) => {
    setLoading(true);
    const result = await axiosLogin(user);

    if (result.response) {
      dispatch({
        type: "SET_USER",
        user: result.userId,
      });
      dispatch({
        type: "SET_USERNAME",
        userName: result.userName,
      });
      setLoading(false);
      navigateTo("/dashboard");
    } else {
      console.log(result);
      setLoading(false);
      setPopUpMsg(result.msg);
      setPopUpShow(true);
    }
  };

  const login = (e) => {
    e.preventDefault();
    if (validate()) {
      const user = { email, password };
      loginUser(user);
    }
  };

  return (
    <div className="p-6 space-y-4 md:space-y-6 sm:p-8  rounded-xl border border-gray-200 shadow-lg shadow-gray-800">
      <h1 className="text-xl font-bold leading-tight tracking-tight md:text-2xl ">
        Sign in to your account
      </h1>
      <form
        onChange={() => setError("")}
        className="space-y-4 md:space-y-6"
        action="#">
        <div>
          <label
            htmlFor="email"
            className="block mb-2 text-sm font-medium text-gray-900 ">
            Email
          </label>
          <input
            type="email"
            name="email"
            onChange={(e) => setEmail(e.target.value)}
            value={email}
            className="bg-gray-50 border border-gray-300 text-gray-900 sm:text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 "
            placeholder="name@company.com"
            required
          />
        </div>
        <div>
          <label
            htmlFor="password"
            className="block mb-2 text-sm font-medium text-gray-900 ">
            Password
          </label>
          <input
            type="password"
            name="password"
            onChange={(e) => setPassword(e.target.value)}
            value={password}
            placeholder="••••••••"
            className="bg-gray-50 border border-gray-300 text-gray-900 sm:text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 "
            required
          />
        </div>
        <div className="flex items-center justify-between">
          <div className="flex items-start">
            <div className="flex items-center h-5">
              <input
                id="remember"
                aria-describedby="remember"
                type="checkbox"
                className="w-4 h-4 border border-gray-300 rounded bg-gray-50 focus:ring-3 focus:ring-primary-300 "
                required
              />
            </div>
            <div className="ml-3 text-sm">
              <label htmlFor="remember" className="text-gray-500 ">
                Remember me
              </label>
            </div>
          </div>
          <div
            onClick={() => navigateTo("/auth/forgetpassword")}
            className="text-sm font-medium text-primary-600 hover:underline ">
            Forgot password?
          </div>
        </div>
        {error && <div className="text-red-600 text-sm">{`*${error}`}</div>}
        <button
          onClick={(e) => login(e)}
          className="w-full text-white bg-blue-600 hover:bg-blue-700 focus:ring-4 focus:outline-none focus:ring-primary-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center ">
          Sign in
        </button>
        <div className="text-sm font-light text-gray-900 ">
          Don’t have an account yet?{" "}
          <div
            onClick={() => navigateTo("/auth/signup")}
            className="inline font-medium text-primary-600 hover:underline">
            Sign up
          </div>
        </div>
      </form>
    </div>
  );
}

export default LoginForm;
