import React from "react";
import { useNavigate } from "react-router-dom";

function Error404() {
  const navigateTo = useNavigate();
  return (
    <div className="flex flex-col items-center justify-center px-6 py-8 mx-auto h-screen overflow-y-scroll  bg-gray-300">
      <div className="w-full bg-white rounded-lg shadow  md:mt-0 sm:max-w-md xl:p-0 ">
        <div className="p-6 space-y-4 md:space-y-6 sm:p-8  rounded-xl border border-gray-200 shadow-lg shadow-gray-800">
          <h1 className="text-xl font-bold leading-tight tracking-tight md:text-2xl ">
            Error 404 : Page Not Found.
          </h1>
          <div className="flex">
            <button
              onClick={() => navigateTo("/")}
              className="mx-auto px-8 py-2 bg-gradient-to-r from-blue-800 to-sky-600 rounded-full hover:shadow-md hover:shadow-gray-500 text-white">
              Go to HomePage
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Error404;
