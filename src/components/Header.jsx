import React from "react";
import Logo from "./img/logo.png";
import Avatar from "./img/avatar.png";
import { MdShoppingBasket } from "react-icons/md";

export const Header = () => {
  return (
    <header className=" fixed z-50 w-screen">
      {/* desktop & tablet */}
      <div className=" hidden md:flex w-full h-full items-center justify-between p-4">
        <div className=" flex items-center gap-2">
          <img src={Logo} className=" w-10 object-cover" alt="logo" />
          <p className=" text-headingColor text-xl font-bold">city</p>
        </div>
        <div className=" flex items-center gap-8">
          <ul className=" flex items-center gap-8">
            <li className=" text-base text-textColor hover:text-headingColor duration-100 transition-all ease-in-out cursor-pointer">
              Home
            </li>
            <li className=" text-base text-textColor hover:text-headingColor duration-100 transition-all ease-in-out cursor-pointer">
              Menu
            </li>
            <li className=" text-base text-textColor hover:text-headingColor duration-100 transition-all ease-in-out cursor-pointer">
              A propos de nous
            </li>
            <li className=" text-base text-textColor hover:text-headingColor duration-100 transition-all ease-in-out cursor-pointer">
              Service
            </li>
          </ul>
          <div className=" relative flex items-center justify-center">
            <MdShoppingBasket className=" text-textColor text-2xl cursor-pointer" />
            <div className=" absolute -top-2 -right-2 w-6 h-6 rounded-full bg-cartNumBg flex items-center justify-center">
              <p className=" text-xs text-white font-semibold">5</p>
            </div>
          </div>
          <img
            src={Avatar}
            className=" w-10 min-w-[40px] h-10 min-h-[40px] drop-shadow-2xl"
            alt="user-profil"
          />
        </div>
      </div>

      {/* mobile */}
      <div className=" flex md:hidden w-full h-full">5</div>
    </header>
  );
};
