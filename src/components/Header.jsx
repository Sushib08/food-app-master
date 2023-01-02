import React, { useState } from "react";
import Logo from "../img/logo.png";
import Avatar from "../img/avatar.png";
import { getAuth, signInWithPopup, GoogleAuthProvider } from "firebase/auth";
import { app } from "../firebase.config";
import { MdShoppingBasket, MdAdd, MdLogout } from "react-icons/md";
import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import { useStateValue } from "./context/StateProvider";
import { actionType } from "./context/reducer";

export const Header = () => {
  const firebaseAuth = getAuth(app);
  const provider = new GoogleAuthProvider();
  const [{ user }, dispatch] = useStateValue();

  const [isMenu, setIsMenu] = useState(false);

  const login = async () => {
    if (!user) {
      const {
        user: { refreshToken, providerData },
      } = await signInWithPopup(firebaseAuth, provider);
      dispatch({
        type: actionType.SET_USER,
        user: providerData[0],
      });
      localStorage.setItem("user", JSON.stringify(providerData[0]));
    } else {
      setIsMenu(!isMenu);
    }
  };

  const logout = () => {
    setIsMenu(false);
    localStorage.clear();

    dispatch({
      type: actionType.SET_USER,
      user: null,
    });
  };

  return (
    <header className="fixed z-50 w-screen p-3 px-4 md:p-6 md:px-16 bg-primary">
      {/* desktop & tablet */}
      <div className=" hidden md:flex w-full h-full items-center justify-between">
        <motion.div whileTap={{ scale: 0.8 }}>
          <Link to={"/"} className=" flex items-center gap-2">
            <img src={Logo} className=" w-10 object-cover" alt="logo" />
            <p className=" text-headingColor text-xl font-bold">ChicKing</p>
          </Link>
        </motion.div>

        <div className=" flex items-center gap-8">
          <motion.ul
            initial={{ opacity: 0, x: 200 }}
            animate={{ opacity: 1, x: 0 }}
            exit={{ opacity: 0, x: 200 }}
            className=" flex items-center gap-8"
          >
            <li
              className=" text-base text-textColor hover:text-headingColor 
            duration-100 transition-all ease-in-out cursor-pointer"
            >
              Home
            </li>
            <li
              className=" text-base text-textColor hover:text-headingColor 
            duration-100 transition-all ease-in-out cursor-pointer"
            >
              Menu
            </li>
            <li
              className=" text-base text-textColor hover:text-headingColor 
            duration-100 transition-all ease-in-out cursor-pointer"
            >
              A propos de nous
            </li>
            <li
              className=" text-base text-textColor hover:text-headingColor 
            duration-100 transition-all ease-in-out cursor-pointer"
            >
              Service
            </li>
          </motion.ul>
          <div className=" relative flex items-center justify-center">
            <MdShoppingBasket className=" text-textColor text-2xl cursor-pointer" />
            <div
              className=" absolute -top-2 -right-2 w-6 h-6 rounded-full 
            bg-cartNumBg flex items-center justify-center"
            >
              <p className=" text-xs text-white font-semibold">5</p>
            </div>
          </div>

          <div className=" relative ">
            <motion.img
              whileTap={{ scale: 0.8 }}
              src={user ? user.photoURL : Avatar}
              className=" w-10 min-w-[40px] h-10 min-h-[40px] drop-shadow-2xl 
              cursor-pointer rounded-full"
              alt="user-profil"
              onClick={login}
            />
            {isMenu && (
              <motion.div
                initial={{ opacity: 0, scale: 0.6 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0, scale: 0.6 }}
                className=" w-56 bg-grey-50 shadow-xl rounded-lg flex flex-col 
                absolute top-12 right-0 px-4 py-2"
              >
                {user && user.email === "maevalagrost@gmail.com" && (
                  <Link to={"/createItem"}>
                    <p
                      className=" px-4 py-2 flex items-center gap-3 cursor-pointer
                     hover:bg-slate-200 transition-all duration-100 ease-in-out
                     text-textColor text-base"
                    >
                      Nouvel article <MdAdd />
                    </p>
                  </Link>
                )}
                <p
                  className=" px-4 py-2 flex items-center gap-3 cursor-pointer
                   hover:bg-slate-200 transition-all duration-100 ease-in-out
                   text-textColor text-base"
                  onClick={logout}
                >
                  Se déconnecter <MdLogout />
                </p>
              </motion.div>
            )}
          </div>
        </div>
      </div>

      {/* mobile */}
      <div className=" flex items-center justify-between md:hidden w-full h-full">
        <div className=" relative flex items-center justify-center">
          <MdShoppingBasket className=" text-textColor text-2xl cursor-pointer" />
          <div
            className=" absolute -top-2 -right-2 w-6 h-6 rounded-full 
          bg-cartNumBg flex items-center justify-center"
          >
            <p className=" text-xs text-white font-semibold">5</p>
          </div>
        </div>

        <Link to={"/"} className=" flex items-center gap-2">
          <img src={Logo} className=" w-10 object-cover" alt="logo" />
          <p className=" text-headingColor text-xl font-bold">ChicKing</p>
        </Link>

        <div className=" relative ">
          <motion.img
            whileTap={{ scale: 0.8 }}
            src={user ? user.photoURL : Avatar}
            className=" w-10 min-w-[40px] h-10 min-h-[40px] drop-shadow-2xl 
            cursor-pointer rounded-full"
            alt="user-profil"
            onClick={login}
          />
          {isMenu && (
            <motion.div
              initial={{ opacity: 0, scale: 0.6 }}
              animate={{ opacity: 1, scale: 1 }}
              exit={{ opacity: 0, scale: 0.6 }}
              className=" w-56 bg-grey-50 shadow-xl rounded-lg flex flex-col 
              absolute top-12 right-0 px-4 py-2"
            >
              {user && user.email === "maevalagrost@gmail.com" && (
                <Link to={"/createItem"}>
                  <p
                    className=" ml-4 flex items-center gap-3 cursor-pointer 
                  bg-grey-200 hover:bg-slate-200 transition-all duration-100 ease-in-out 
                  text-textColor text-base"
                  >
                    Nouvel article <MdAdd />
                  </p>
                </Link>
              )}
              <ul className=" flex flex-col px-4">
                <li
                  className=" text-base text-textColor  hover:bg-slate-200 
                hover:text-headingColor duration-100 transition-all ease-in-out 
                cursor-pointer"
                onClick={() => setIsMenu(false)}
                >
                  Home
                </li>
                <li
                  className=" text-base text-textColor  hover:bg-slate-200 
                hover:text-headingColor duration-100 transition-all ease-in-out 
                cursor-pointer"
                onClick={() => setIsMenu(false)}
                >
                  Menu
                </li>
                <li
                  className=" text-base text-textColor  hover:bg-slate-200 
                hover:text-headingColor duration-100 transition-all ease-in-out 
                cursor-pointer"
                onClick={() => setIsMenu(false)}
                >
                  A propos de nous
                </li>
                <li
                  className=" text-base text-textColor  hover:bg-slate-200 
                hover:text-headingColor duration-100 transition-all ease-in-out 
                cursor-pointer"
                onClick={() => setIsMenu(false)}
                >
                  Service
                </li>
              </ul>
              <p
                className=" flex items-center gap-3 hover:shadow-lg cursor-pointer 
                justify-center bg-grey-400 hover:bg-slate-200 transition-all duration-100 
                ease-in-out text-textColor text-base"
                onClick={logout}
              >
                Se déconnecter <MdLogout />
              </p>
            </motion.div>
          )}
        </div>
      </div>
    </header>
  );
};
