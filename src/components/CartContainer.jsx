import React from "react";
import { MdOutlineKeyboardBackspace } from "react-icons/md";
import { motion } from "framer-motion";
import { RiRefreshFill } from "react-icons/ri";
import { BsBasketFill } from "react-icons/bs";
import { BiMinus, BiPlus } from "react-icons/bi";
import { useStateValue } from "./context/StateProvider";
import { actionType } from "./context/reducer";
import EmptyCart from "../img/emptyCart.svg";

export const CartContainer = () => {
  const [{ cartShow, cartItems, user }, dispatch] = useStateValue();

  const showCart = () => {
    dispatch({
      type: actionType.SET_CART_SHOW,
      cartShow: !cartShow,
    });
  };

  return (
    <motion.div
      initial={{ opacity: 0, x: 200 }}
      animate={{ opacity: 1, x: 0 }}
      exit={{ opacity: 0, x: 200 }}
      className=" fixed top-0 right-0 w-full md:w-375 h-screen bg-white drop-shadow-md flex flex-col z-[101]"
    >
      <div className=" w-full flex items-center justify-between p-4">
        <motion.div whileTap={{ scale: 0.8 }} onClick={showCart}>
          <MdOutlineKeyboardBackspace className=" text-textColor text-3xl" />
        </motion.div>

        <BsBasketFill className=" w-6 h-6" />

        <motion.p
          whileTap={{ scale: 0.8 }}
          className="flex items-center gap-2 p-1 px-2 my-2 bg-gray-100 rounded-md hover:shadow-md  cursor-pointer text-textColor text-base"
        >
          Effacer <RiRefreshFill />
        </motion.p>
      </div>

      {/* bottom section */}
      {cartItems && cartItems.length > 0 ? (
        <div className=" w-full h-full bg-cartBg rounded-t-[2rem] flex flex-col">
          {/* cart Items section */}
          <div className=" w-full h-340 md:h-42 px-6 py-10 flex flex-col gap-3 overflow-y-scroll scrollbar-none">
            {/* cart Items */}
            {cartItems &&
              cartItems.map((item) => (
                <div
                  key={item.id}
                  className=" w-full p-1 px-2 rounded-lg bg-cartItem flex items-center gap-2"
                >
                  <img
                    src={item?.imageURL}
                    alt={item?.title}
                    className=" w-30 h-30 max-w-[60px] rounded-full object-contain"
                  />

                  {/* name section */}
                  <div className=" flex flex-col gap-2">
                    <p className=" text-base text-gray-50">{item?.title}</p>
                    <p className=" text-sm block text-gray-300 font-semibold">
                      {item?.price} €
                    </p>
                  </div>

                  {/* button section */}
                  <div className=" group flex items-center gap-2 ml-auto cursor-pointer">
                    <motion.div whileTap={{ scale: 0.8 }}>
                      <BiMinus className=" text-white" />
                    </motion.div>
                    <p className=" w-5 h-5 rounded-sm bg-cartBg text-gray-50 flex items-center justify-center">
                      {item?.qty}
                    </p>

                    <motion.div whileTap={{ scale: 0.8 }}>
                      <BiPlus className=" text-white" />
                    </motion.div>
                  </div>
                </div>
              ))}
          </div>

          {/* cart total section */}
          <div className="w-full bg-cartTotal rounded-t-[2rem] flex flex-col items-center justify-eveky px-8 py-2">
            <div className=" w-full flex items-center justify-between">
              <p className=" text-gray-400 text-lg">Sous-Total</p>
              <p className=" text-gray-400 text-lg">€5.5</p>
            </div>
            <div className=" w-full flex items-center justify-between">
              <p className=" text-gray-400 text-lg">Livraison</p>
              <p className=" text-gray-400 text-lg">€2.5</p>
            </div>

            <div className=" w-full border-b border-gray-600 my-2"></div>

            <div className=" w-full flex items-center justify-between">
              <p className=" text-gray-200 text-xl font-semibold">Total</p>
              <p className=" text-gray-200 text-xl font-semibold">€5.5</p>
            </div>

            {user ? (
              <motion.button
                whileTap={{ scale: 0.95 }}
                type="button"
                className=" w-full p-2 rounded-full bg-gradient-to-tr from-orange-400 to-orange-600
           text-gray-50 text-lg my-4 hover:shadow-lg"
              >
                Valider le panier
              </motion.button>
            ) : (
              <motion.button
                whileTap={{ scale: 0.95 }}
                type="button"
                className=" w-full p-2 rounded-full bg-gradient-to-tr from-orange-400 to-orange-600
           text-gray-50 text-lg my-4 hover:shadow-lg"
              >
                Connectez-vous pour valider le panier
              </motion.button>
            )}
          </div>
        </div>
      ) : (
        <div className=" w-full h-full flex flex-col items-center justify-center gap-6">
          <img src={EmptyCart} className=" w-300" alt="" />
          <p className=" text-xl text-textColor font-semibold">
            Ajouter des articles dans le panier
          </p>
        </div>
      )}
    </motion.div>
  );
};
