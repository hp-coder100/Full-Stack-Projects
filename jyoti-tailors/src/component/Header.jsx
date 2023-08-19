import React, { useState } from "react";
import MenuRoundedIcon from "@mui/icons-material/MenuRounded";
function Header() {
  const [showMenu, setShowMenu] = useState(false);
  const [active, setActive] = useState("Home");

  const menu_item = ["Home", "Services&Features", "Feedbacks", "Contact"];
  return (
    <div className="w-full h-16 p-2 flex bg-[--bg-color] backdrop-blur-xl item-center z-10 drop-shadow-xl top-0 sticky">
      <div className="container max-w-6xl mx-auto flex-row sm:flex item-center relative">
        <div className="basis-full px-2 flex item-center justify-between">
          {/* <img src={logo} alt="logo" height={50} width={50} className="inline-block invert mb-1 mr-2 img-fluid aspect-video"/> */}
          <div className="inline-block text-3xl text-[--text-primary] font-extrabold tracking-wider">
            Jyoti-<span className="text-[--primary-color]">Tailors'</span>
          </div>
          <button
            onClick={() => setShowMenu(!showMenu)}
            className="sm:hidden ms-auto">
            <MenuRoundedIcon></MenuRoundedIcon>
          </button>
        </div>

        <div
          className={`${
            showMenu ? "" : "hidden"
          } sm:block basis-full ms-auto flex bg-[--bg-color]`}>
          <ul className="flex-row sm:flex  w-full my-auto gap-4 item-center p-1 divide-y sm:divide-y-0 divide-solid divide-gray-300 justify-evenly transition-all ease-in duration-300 ">
            {menu_item.map((item, index) => {
              return (
                <a href={`#${item}`}>
                  <li
                    key={index}
                    onClick={() => setActive(item)}
                    className={`${
                      active === item
                        ? "text-[--primary-color] font-medium scale-110"
                        : ""
                    } py-1 text-center hover:font-medium hover:scale-110 hover:text-[--primary-color] transition duration-50 ease`}>
                    {item}
                  </li>
                </a>
              );
            })}
          </ul>
        </div>
      </div>
    </div>
  );
}

export default Header;
