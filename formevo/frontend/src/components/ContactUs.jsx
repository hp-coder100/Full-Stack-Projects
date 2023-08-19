import React, { useState } from "react";
import ExpandMoreRoundedIcon from "@mui/icons-material/ExpandMoreRounded";
import ContactSupportRoundedIcon from "@mui/icons-material/ContactSupportRounded";
import { axiosSupportMessage } from "../apiservice/MyAxios";
function ContactUs({ show, setShow }) {
  const [email, setEmail] = useState("");
  const [message, setMessage] = useState("");
  const [error, setError] = useState(null);
  const [success, setSuccess] = useState(false);
  const submit = async (e) => {
    e.preventDefault();
    let regex = new RegExp("[a-z0-9]+@[a-z]+.[a-z]{2,3}");

    if (!email) {
      setError("Email is requied");
    } else if (!regex.test(email)) {
      setError("Email is not valid.");
    } else if (!message || message.length < 50) {
      setError("Message must contain at least 50 characters");
    } else {
      const data = { email, message };
      const result = await axiosSupportMessage(data);
      if (result.response) {
        setEmail("");
        setMessage("");
        setShow(false);
        setSuccess(true);
        setTimeout(() => {
          setSuccess(false);
        }, 2000);
      } else {
        setError(result.msg);
      }
    }
  };

  return (
    <div
      className={`
      right-0 sm:right-10 
     fixed bottom-0 sm:bottom-10 tansitions all duration-300 ease-in  z-50 p-4 float-right `}>
      <div
        id="toast-undo"
        className="flex items-center p-2 text-gray-700 bg-gradient-to-r from-blue-800 to-sky-600 rounded-lg shadow-lg shadow-gray-600 flex-wrap "
        role="alert">
        <div className={`${show ? `` : `hidden`} w-80 basis-full`}>
          <div className="text-white text-center font-semibold pb-1">
            Contact Us
          </div>
          <form
            onChange={() => setError(null)}
            className="w-full h-full flex-row items-center">
            <input
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              className="h-10 mb-1 w-full focus:outline-none border-b border-gray-500 p-2 rounded-md"
              placeholder="Your Email"
              type="text"></input>
            <div className="bg-white p-1 rounded-md">
              <textarea
                value={message}
                onChange={(e) => setMessage(e.target.value)}
                className="h-60  w-full  focus:outline-none p-2 rounded-md"
                placeholder="Write Your Message..."
              />
              {error && (
                <div className="max-w-fit w-fit text-red-600 p-1 font-normal text-sm">
                  {error}
                </div>
              )}
              <button
                onClick={(e) => submit(e)}
                className="block mt-auto w-full bg-blue-900 h-10 text-white rounded-md">
                Submit
              </button>
            </div>
          </form>
        </div>
        <div className="basis-full text-right text-sm text-white font-normal p-1">
          <div onClick={() => setShow(!show)}>
            {show && <ExpandMoreRoundedIcon></ExpandMoreRoundedIcon>}
            {!show && <ContactSupportRoundedIcon />}
          </div>
        </div>
      </div>
      {success && (
        <div className="absolute z-100 bg-blue-200 text-gray-800 py-1 px-4 transitions all duration-200 ease-in-out  rounded-lg w-80 -translate-x-3/4 bottom-10 shadow-lg shadow-gray-400">
          Messgae Sent Successfully
        </div>
      )}{" "}
    </div>
  );
}

export default ContactUs;
