import React from "react";
import { MdShoppingBasket } from "react-icons/md";
import { motion } from "framer-motion";

export const RowContainer = ({ flag }) => {
  return (
    <div
      className={`w-full my-12 bg-rowBg ${
        flag ? "overflow-x-scroll" : "overflow-x-hidden"
      }`}
    >
      <div className=" w-300 md:w-340 h-auto my-12 bg-gray-100 rounded-lg p-2 
      backdrop-blur-lg hover:drop-shadow-lg">
        <div className=" w-full flex items-center justify-center">
          <motion.img
            whileTap={{ scale: 1.2 }}
            src="https://firebasestorage.googleapis.com/v0/b/food-delivery-app-dc13b.appspot.com/o/Images%2F1672668835557-i1.png?alt=media&token=868608df-eb12-461f-8755-0015664d1a53"
            alt=""
            className=" w-40 -mt-8"
          />
          <motion.div
            whileTap={{ scale: 0.75 }}
            className=" w-8 h-8 rounded-full bg-red-600 flex 
          items-center justify-center cursor-pointer hover:shadow-md"
          >
            <MdShoppingBasket className=" text-white" />
          </motion.div>
        </div>

        <div className=" w-full flex flex-col items-end justify-end ">
          <p className=" text-textColor font-semibold text-base md:text-lg">
            Chocolat et vanille
          </p>
          <p className=" mt-1 text-sm text-gray-500">45 calories</p>
          <div className=" flex items-center gap-8">
            <p className=" text-lg text-headingColor font-semibold">
              <span className=" text-sm text-red-500">€</span>5.25
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};
