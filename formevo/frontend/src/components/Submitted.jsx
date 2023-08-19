import React from "react";
import { useNavigate } from "react-router-dom";
import OfflinePinRoundedIcon from "@mui/icons-material/OfflinePinRounded";
function Submitted() {
  const navigateTo = useNavigate();
  return (
    <div className="conainter flex">
      <div className="mx-auto my-20">
        <div className="flex-row justify-center items-center gap-2">
          <div className="mx-auto w-24 h-24 rounded-full flex items-center justify-center p-2">
            <OfflinePinRoundedIcon
              sx={{ fontSize: 80, color: "green" }}
              className="mx-auto "
            />
          </div>
          <div className="text-2xl text-gray-700 text-center">
            Form Submitted Successfully.
          </div>
          <button
            onClick={() => navigateTo("/")}
            className="mx-auto block m-4 bg-gradient-to-r from-blue-800 to-sky-500 rounded-full font-medium text-sm px-4 text-white py-2 hover:shadow hover:shadow-gray-500 hover:scale-105">
            Go to HomePage
          </button>
        </div>
      </div>
    </div>
  );
}

export default Submitted;
