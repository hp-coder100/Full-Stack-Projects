import React from "react";

function Popup({ msg, action, show, setShow }) {
  return (
    <div
      className={`${
        show ? `` : `hidden`
      } z-20 fixed contianer-fulid flex w-screen h-full tansitions all ease-in-out duration-150 backdrop-blur-sm bg-black/50 p-2`}>
      <div className="top-2/4 left-2/4 -translate-y-2/3 -translate-x-1/2 relative  h-fit w-96 max-w-sm rounded-md p-4  bg-white shadow-lg shadow-gray-900 ">
        <div className="text-lg text-gray-800 font-normal p-2 mb-4">{msg}</div>
        <div className="flex gap-2">
          <button
            onClick={() => setShow(false)}
            className="ms-auto rounded-full  px-4 py-1 text-blue-800 border border-blue-800 hover:bg-blue-800 hover:text-white">
            Close
          </button>
          {action && (
            <button
              onClick={() => {
                action();
                setShow(false);
              }}
              className="rounded-full  px-4 py-1 text-white  border border-blue-800 bg-blue-800 hover:bg-blue-900">
              Confirm
            </button>
          )}
        </div>
      </div>
    </div>
  );
}

export default Popup;
