import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import { axiosSingUp } from "../apiservice/MyAxios";
import { useStateValue } from "../state/StateProvider";
function SingupForm({ setPopUpMsg, setPopUpShow, setLoading }) {
  const [state, dispatch] = useStateValue();
  const navigateTo = useNavigate();
  const [fullname, setFullName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");
  const [termsAndCond, setTermsAndCond] = useState(false);
  const [errorMessage, setErrorMessage] = useState(null);

  const validateForm = () => {
    if (
      fullname === "" ||
      email === "" ||
      password === "" ||
      confirmPassword === ""
    ) {
      setErrorMessage("All fields are required.");
      return false;
    }
    let regex = new RegExp("[a-z0-9]+@[a-z]+.[a-z]{2,3}");
    if (!regex.test(email)) {
      setErrorMessage("Email is not valid.");
      return false;
    }

    if (password.length < 8) {
      setErrorMessage("Password must be atleast 8 characters long");
      return false;
    }

    if (confirmPassword !== password) {
      setErrorMessage("Both password don't match.Kindly check.");
      return false;
    }

    if (!termsAndCond) {
      setErrorMessage("Accept the Terms and Conditions.");
      return false;
    }

    return true;
  };

  const registerUser = async (user) => {
    setLoading(true);
    const result = await axiosSingUp(user);
    console.log(result);
    if (result.response) {
      setLoading(false);
      console.log(result);
      setLoading(false);
      setPopUpMsg(result.msg);
      setPopUpShow(true);
    } else {
      console.log(result);
      setLoading(false);
      setPopUpMsg(result.msg);
      setPopUpShow(true);
    }
  };

  const submit = (e) => {
    e.preventDefault();

    if (validateForm()) {
      const user = { fullname, email, password };
      registerUser(user);
    }
  };

  return (
    <>
      <div className="p-6 space-y-4 md:space-y-6 sm:p-8  rounded-xl border border-gray-200 shadow-lg shadow-gray-800">
        <h1 className="text-xl font-bold leading-tight tracking-tight md:text-2xl ">
          Create New Account
        </h1>
        <form
          onChange={() => setErrorMessage("")}
          className="space-y-4 md:space-y-6">
          <div>
            <label
              htmlFor="Full Name"
              className="block mb-2 text-sm font-medium text-gray-900 ">
              Full Name
            </label>
            <input
              type="text"
              name="fullname"
              onChange={(e) => setFullName(e.target.value)}
              className="bg-gray-50 border border-gray-300 text-gray-900 sm:text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 "
              placeholder=""
              required
            />
          </div>

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
              placeholder="••••••••"
              className="bg-gray-50 border border-gray-300 text-gray-900 sm:text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 "
              required
            />
          </div>
          <div>
            <label
              htmlFor="confirmpassword"
              className="block mb-2 text-sm font-medium text-gray-900 ">
              Confirm Password
            </label>
            <input
              type="text"
              name="confirmpassword"
              onChange={(e) => setConfirmPassword(e.target.value)}
              placeholder="Password"
              className="bg-gray-50 border border-gray-300 text-gray-900 sm:text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 "
              required
            />
          </div>
          <div className="flex items-center justify-between">
            <div className="flex items-start">
              <div className="flex items-center h-5">
                <input
                  id="termAndCond"
                  aria-describedby="termAndCond"
                  type="checkbox"
                  onChange={(e) => setTermsAndCond(e.target.checked)}
                  className="w-4 h-4 border border-gray-300 rounded bg-gray-50 focus:ring-3 focus:ring-primary-300 "
                  required
                />
              </div>
              <div className="ml-3 text-sm">
                <label htmlFor="remember" className="text-gray-500 ">
                  Accept{" "}
                  <a href="#A" className="text-blue-600 underline">
                    Terms & Conditions.
                  </a>
                </label>
              </div>
            </div>
          </div>
          {errorMessage && (
            <div className="text-red-600 text-sm">{`*${errorMessage}`}</div>
          )}
          <button
            onClick={(e) => submit(e)}
            className="w-full text-white bg-blue-600 hover:bg-blue-700 focus:ring-4 focus:outline-none focus:ring-primary-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center ">
            Submit
          </button>
          <div className="text-sm font-light text-gray-900 ">
            Already have an account yet?{" "}
            <div
              onClick={() => navigateTo("/auth/login")}
              className="inline font-medium text-blue-600 hover:underline font-semibold">
              Log In
            </div>
          </div>
        </form>
      </div>
    </>
  );
}

export default SingupForm;
