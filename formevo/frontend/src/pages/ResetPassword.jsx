import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import { axiosResetPassword } from "../apiservice/MyAxios";

function ResetPassword({ setPopUpMsg, setPopUpShow, setLoading }) {
  const [email, setEmail] = useState(null);
  const navigateTo = useNavigate();

  const submit = async (e) => {
    e.preventDefault();

    if (!email) {
      setPopUpMsg("Please Enter Your Email");
      setPopUpShow(true);
    } else {
      setLoading(true);
      const result = await axiosResetPassword(email);
      setLoading(false);
      setPopUpMsg(result.msg);
      setPopUpShow(true);
    }
  };

  return (
    <>
      <div className="p-6 space-y-4 md:space-y-6 sm:p-8  rounded-xl border border-gray-200 shadow-lg shadow-gray-800">
        <h1 className="text-xl font-bold leading-tight tracking-tight md:text-2xl ">
          Reset Password
        </h1>
        <form className="space-y-4 md:space-y-6" action="#">
          <div>
            <label
              htmlFor="email"
              className="block mb-2 text-sm font-medium text-gray-900 ">
              Enter Your Email
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
          <button
            onClick={(e) => submit(e)}
            className="w-full text-white bg-blue-600 hover:bg-blue-700 focus:ring-4 focus:outline-none focus:ring-primary-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center ">
            Submit
          </button>
          <div className="text-sm font-light text-gray-900 ">
            Back to{" "}
            <div
              onClick={() => navigateTo("/auth/login")}
              className="inline font-medium text-primary-600 hover:underline">
              Log In
            </div>
          </div>
        </form>
      </div>
    </>
  );
}

export default ResetPassword;
