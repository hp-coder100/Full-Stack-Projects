import React, { useState } from "react";
import SingupForm from "./SingupForm";
import LoginForm from "./LoginForm";
import { useParams } from "react-router-dom";
import Loadder from "../components/Loadder";
import Popup from "../components/Popup";
import ResetPassword from "./ResetPassword";

function LoginResgistrationPage() {
  const { tab } = useParams();
  const [popUpMsg, setPopUpMsg] = useState("");
  const [popUpShow, setPopUpShow] = useState(false);
  const [loading, setLoading] = useState(false);

  return (
    <>
      {loading && <Loadder></Loadder>}

      <Popup show={popUpShow} msg={popUpMsg} setShow={setPopUpShow}></Popup>
      <div
        className={` ${
          tab === "signup" ? `pt-44` : ``
        } flex flex-col items-center justify-center px-6 py-8 mx-auto h-screen overflow-y-scroll  bg-gray-300`}>
        <div
          className={` w-full bg-white rounded-lg shadow  sm:max-w-md xl:p-0 `}>
          {tab === "signup" && (
            <SingupForm
              setPopUpMsg={setPopUpMsg}
              setPopUpShow={setPopUpShow}
              setLoading={setLoading}></SingupForm>
          )}
          {tab === "login" && (
            <LoginForm
              setPopUpMsg={setPopUpMsg}
              setPopUpShow={setPopUpShow}
              setLoading={setLoading}></LoginForm>
          )}
          {tab === "forgetpassword" && (
            <ResetPassword
              setPopUpMsg={setPopUpMsg}
              setPopUpShow={setPopUpShow}
              setLoading={setLoading}></ResetPassword>
          )}
        </div>
      </div>
    </>
  );
}

export default LoginResgistrationPage;
