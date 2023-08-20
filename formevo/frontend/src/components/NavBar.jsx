import React, { useEffect, useState } from "react";
import { useNavigate, useLocation } from "react-router-dom";
import LoginRoundedIcon from "@mui/icons-material/LoginRounded";
import LogoutRoundedIcon from "@mui/icons-material/LogoutRounded";
import { useStateValue } from "../state/StateProvider";
import Popup from "./Popup";
import logo from "../assets/logo512.png";
import MenuRoundedIcon from "@mui/icons-material/MenuRounded";
function NavBar() {
  const navigateTo = useNavigate();
  const [{ user }, dispatch] = useStateValue();
  const [popUpShow, setPopUpShow] = useState(false);
  const logout = () => {
    dispatch({ type: "SET_USER", user: null });
    navigateTo("/");
  };
  const [active, setActive] = useState("");

  const location = useLocation();
  useEffect(() => {
    setActive(location.pathname);
  }, [location]);

  const [menuShow, setMenuShow] = useState(false);

  return (
    <>
      <Popup
        action={logout}
        msg={"Are You Sure to Logout."}
        show={popUpShow}
        setShow={setPopUpShow}></Popup>
      <div className="container-fluid min-h-fit flex bg-white border-b border-gray-500 shadow-lg z-10 fixed w-full p-2">
        <div className="container mx-auto flex flex-wrap sm:flex-nowrap max-w-6xl justify-between items-center">
          <div
            onClick={() => navigateTo("/")}
            className="flex items-center cursor-pointer font-extrabold text-transparent text-3xl bg-clip-text bg-gradient-to-r from-blue-800 to-sky-600">
            <img src={logo} alt="" width={"40"} height={"40"}></img>
            <span className="inline ms-2">F4easy</span>
          </div>
          <div onClick={() => setMenuShow(!menuShow)} className="sm:hidden">
            <MenuRoundedIcon></MenuRoundedIcon>
          </div>
          <div
            className={`${
              menuShow ? `flex-row` : `hidden`
            } basis-full divide-y sm:divide-none divide-gray-300 sm:basis-auto justify-center sm:flex gap-4 tracking-wide font-medium text-lg p-2 items-baseline transitions duration-200 ease`}>
            <div
              onClick={() => {
                navigateTo("/");
                setMenuShow(false);
              }}
              className={`${
                active === "/" ? "text-sky-900" : ""
              } py-2 sm:py-0 text-center cursor-pointer hover:text-sky-900 px-1`}>
              Home
            </div>
            {user && (
              <div
                onClick={() => {
                  navigateTo("/dashboard");
                  setMenuShow(false);
                }}
                className={`${
                  active === "/dashboard" ? "text-sky-900" : ""
                } py-2 sm:py-0 text-center cursor-pointer hover:text-sky-900 px-1`}>
                My Dashboard
              </div>
            )}
            <div
              onClick={() => {
                navigateTo("/aboutus");
                setMenuShow(false);
              }}
              className={`${
                active === "/aboutus" ? "text-sky-900" : ""
              } py-2 sm:py-0 text-center cursor-pointer hover:text-sky-900 px-1`}>
              About Us
            </div>
            {!user && (
              <div
                onClick={() => {
                  navigateTo("/auth/login");
                  setMenuShow(false);
                }}
                className="text-center cursor-pointer hover:boder-0 hover:text-sky-900 ">
                Login <LoginRoundedIcon></LoginRoundedIcon>
              </div>
            )}
            {user && (
              <div
                onClick={(e) => {
                  e.preventDefault();
                  setPopUpShow(true);
                  setMenuShow(false);
                }}
                className="text-center cursor-pointer hover:boder-0 hover:text-sky-900 ">
                Logout <LogoutRoundedIcon></LogoutRoundedIcon>
              </div>
            )}
          </div>
        </div>
      </div>
    </>
  );
}

export default NavBar;
