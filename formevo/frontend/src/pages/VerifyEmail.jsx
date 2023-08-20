import React, { useEffect, useState } from "react";
import { axiosVerifyEmail } from "../apiservice/MyAxios";
import { useNavigate, useParams } from "react-router-dom";
import Loadder from "../components/Loadder";
import { useStateValue } from "../state/StateProvider";

function VerifyEmail() {
  const [{ user }, dispatch] = useStateValue();
  const [loading, setLoading] = useState(false);
  const [popUpMsg, setPopUpMsg] = useState("");
  const [verified, setVerified] = useState(false);
  const navigateTo = useNavigate();
  const { token } = useParams();
  const verify = async () => {
    if (token) {
      console.log("token", token);
      setLoading(true);
      const result = await axiosVerifyEmail(token);
      if (result.response) {
        setPopUpMsg(result.msg);
        setLoading(false);
      } else {
        setPopUpMsg(result.msg);
        setLoading(false);
      }
    }
  };
  useEffect(() => {
    if (user) {
      dispatch({ type: "SET_USER", user: null });
    }
    if (!verified) {
      verify();
      setVerified(true);
    }
  }, [verified]);

  return (
    <>
      {loading && <Loadder></Loadder>}
      <div className="container mx-auto relative h-screen">
        <div className="absolute top-2/4 left-2/4 -translate-y-1/2 -translate-x-1/2 ">
          <div className="text-2xl font-bold text-gray-800  p-2 text-center mb-8">
            {popUpMsg}
          </div>
          <div className="flex">
            <button
              onClick={() => navigateTo("/auth/login")}
              className="mx-auto px-8 py-2 bg-gradient-to-r from-blue-800 to-sky-600 rounded-full hover:shadow-md hover:shadow-gray-500 text-white">
              Go to Login Page
            </button>
          </div>
        </div>
      </div>
    </>
  );
}

export default VerifyEmail;
