import React from "react";
import { MdOutlineKeyboardBackspace } from "react-icons/md";
import { motion } from "framer-motion";
import { RiRefreshFill } from "react-icons/ri";
import { BsBasketFill } from "react-icons/bs";
import { BiMinus, BiPlus } from "react-icons/bi";

export const CartContainer = () => {
  return (
    <div className=" fixed top-0 right-0 w-full md:w-375 h-screen bg-white drop-shadow-md flex flex-col z-[101]">
      <div className=" w-full flex items-center justify-between p-4">
        <motion.div whileTap={{ scale: 0.8 }}>
          <MdOutlineKeyboardBackspace className=" text-textColor text-3xl" />
        </motion.div>

        <BsBasketFill className=" w-6 h-6" />

        <motion.p
          whileTap={{ scale: 0.8 }}
          className=" flex items-center gap-2 p-1 px-2 my-2 bg-gray-100 rounded-md hover:shadow-md duration-100 ease-in-out transition-all 
cursor-pointer text-textColor text-base"
        >
          Effacer <RiRefreshFill />
        </motion.p>
      </div>

      {/* bottom section */}
      <div className=" w-full h-full bg-cartBg rounded-t-[2rem] flex flex-col">
        {/* cart Items section */}
        <div className=" w-full h-340 md:h-42 px-6 py-10 flex flex-col gap-3 overflow-y-scroll scrollbar-none">
          {/* cart Items */}
          <div className=" w-full p-1 px-2 rounded-lg bg-cartItem flex items-center gap-2">
            <img
              src="https://firebasestorage.googleapis.com/v0/b/food-delivery-app-dc13b.appspot.com/o/Images%2F1672783298751-r5.png?alt=media&token=c90062f1-d066-4a44-b2d8-609a9c6ad14f"
              alt=""
              className=" w-30 h-30 max-w-[60px] rounded-full object-contain"
            />

            {/* name section */}
            <div className=" flex flex-col gap-2">
              <p className=" text-base text-gray-50">Riz Cantonais</p>
              <p className=" text-sm block text-gray-300 font-semibold">
                € 5.5
              </p>
            </div>

            {/* button section */}
            <div className=" group flex items-center gap-2 ml-auto cursor-pointer">
              <motion.div whileTap={{ scale: 0.8 }}>
                <BiMinus className=" text-white" />
              </motion.div>
              <p className=" w-5 h-5 rounded-sm bg-cartBg text-gray-50 flex items-center justify-center">
                1
              </p>

              <motion.div whileTap={{ scale: 0.8 }}>
                <BiPlus className=" text-white" />
              </motion.div>
            </div>
          </div>
        </div>

        {/* cart total section */}
        <div className="w-full bg-cartTotal rounded-t-[2rem] flex flex-col items-center justify-eveky px-8 py-2">
          <div className=" w-full flex items-center justify-between">
            <p className=" to-gray-400 text-lg">Sous-Total</p>
            <p className=" to-gray-400 text-lg">€5.5</p>
          </div>
          <div className=" w-full flex items-center justify-between">
            <p className=" to-gray-400 text-lg">Livraison</p>
            <p className=" to-gray-400 text-lg">€2.5</p>
          </div>

          <div className=" w-full border-b border-gray-600 my-2"></div>

          <div className=" w-full flex items-center justify-between">
            <p className=" to-gray-200 text-xl font-semibold">Total</p>
            <p className=" to-gray-200 text-xl font-semibold">€5.5</p>
          </div>

          <motion.button whileTap={{ scale : 0.8}} type='button' className=" w-full p-2 rounded-full  bg-yellow-600
           text-gray-50 text-lg my-2 hover:shadow-lg transition-all duration-150 ease-out">
            Valider le panier
          </motion.button>
        </div>
      </div>
    </div>
  );
};
