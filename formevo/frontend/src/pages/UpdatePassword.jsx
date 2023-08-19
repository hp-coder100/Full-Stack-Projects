import React, { useEffect, useState } from "react";
import { useNavigate, useParams } from "react-router-dom";
import { axiosUpdatePassword } from "../apiservice/MyAxios";
import Loadder from "../components/Loadder";
import Popup from "../components/Popup";
import { useStateValue } from "../state/StateProvider";
function UpdatePassword() {
  const { token } = useParams();

  const [password, setPassword] = useState(null);
  const [confirmPassword, setConfirmPass] = useState(null);
  const [popUpMsg, setPopUpMsg] = useState(null);
  const [popUpShow, setPopUpShow] = useState(false);
  const [loading, setLoading] = useState(false);
  const [success, setSuccess] = useState(false);
  const [{ user }, dispatch] = useStateValue();
  const navigateTo = useNavigate();

  const submit = async (e) => {
    e.preventDefault();

    if (password.length < 8) {
      setPopUpMsg("Password Must contains at least 8 character");
      setPopUpShow(true);
    } else if (password !== confirmPassword) {
      setPopUpMsg("Both passwords are different.");
      setPopUpShow(true);
    } else {
      setLoading(true);
      const result = await axiosUpdatePassword(token, password);

      setLoading(false);
      setPopUpMsg(result.msg);
      setPopUpShow(true);
      if (result.response) {
        setSuccess(true);
      }
    }
  };

  useEffect(() => {
    if (user) {
      dispatch({ type: "SET_USER", user: null });
    }

    if (!popUpShow && success) {
      navigateTo("/auth/login");
    }
  }, [popUpShow, user]);

  return (
    <>
      {loading && <Loadder></Loadder>}
      <Popup show={popUpShow} msg={popUpMsg} setShow={setPopUpShow}></Popup>
      <div className="flex flex-col items-center justify-center px-6 py-8 mx-auto h-screen overflow-y-scroll  bg-gray-300">
        <div className="w-full bg-white rounded-lg shadow  md:mt-0 sm:max-w-md xl:p-0 ">
          <div className="p-6 space-y-4 md:space-y-6 sm:p-8  rounded-xl border border-gray-200 shadow-lg shadow-gray-800">
            <h1 className="text-xl font-bold leading-tight tracking-tight md:text-2xl ">
              Set New Password
            </h1>
            <form className="space-y-4 md:space-y-6" action="#">
              <div>
                <div className="mb-3">
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
                <div className="mb-3">
                  <label
                    htmlFor="confirmpassword"
                    className="block mb-2 text-sm font-medium text-gray-900 ">
                    Confirm Password
                  </label>
                  <input
                    type="text"
                    name="confirmpassword"
                    onChange={(e) => setConfirmPass(e.target.value)}
                    placeholder="Password"
                    className="bg-gray-50 border border-gray-300 text-gray-900 sm:text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 "
                    required
                  />
                </div>
                <button
                  onClick={(e) => submit(e)}
                  className="mb-3 w-full text-white bg-blue-600 hover:bg-blue-700 focus:ring-4 focus:outline-none focus:ring-primary-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center ">
                  Submit
                </button>
              </div>
            </form>
          </div>
        </div>
      </div>
    </>
  );
}

export default UpdatePassword;
