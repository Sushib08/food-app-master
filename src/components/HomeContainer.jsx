import React from "react";
import Delivery from "../img/delivery.png";
import HeroBg from "../img/heroBg.png";
import { heroData } from "../utils/data";

export const HomeContainer = () => {
  return (
    <section
      className=" grid grid-cols-1 md:grid-cols-2 gap-2 w-full"
      id="home"
    >
      <div className=" py-2 flex-1 flex flex-col items-start justify-center gap-6">
        <div className=" flex items-center gap-2 justify-center bg-orange-100 px-4 py-1 rounded-full">
          <p className=" text-base text-orange-500 font-semibold">Livraison</p>
          <div className=" w-8 h-8 bg-white rounded-full overflow-hidden drop-shadow-xl">
            <img
              src={Delivery}
              className=" w-full h-full object-contain"
              alt="delivery"
            />
          </div>
        </div>

        <p className=" text-[2.5rem] lg:text-[4.5rem] font-bold tracking-wide text-headingColor">
          Livraison Rapide Dans{" "}
          <span className=" text-orange-600 text-[3rem] lg:text-[5rem]">
            Ta Ville
          </span>
        </p>

        <p className=" text-base text-textColor text-center md:text-left md:w-[80%]">
          N'hésitez plus nous livrons à Lyon et ses environs !<br />
          Livraison gratuite{" "}
          <span className=" text-orange-500 font-semibold">
            à partir de 15€
          </span>{" "}
          <br />
          Pour le 3e, 7e arrondissement de Lyon, Villeurbanne et Vauxl-en-Velin{" "}
          <br />
          Livraison gratuite{" "}
          <span className=" text-orange-500 font-semibold">
            à partir de 20€
          </span>{" "}
          <br />
          Pour le 1er, 4e et 9e arrondissement de Lyon et Caluire <br />
          Livraison gratuite{" "}
          <span className=" text-orange-500 font-semibold">
            à partir de 25€
          </span>{" "}
          <br />
          Pour le 5e, 6e et 7e arrondissement de Lyon
        </p>

        <button
          type="button"
          className=" bg-gradient-to-br from-orange-400 to-orange-500 w-full md:w-auto px-4 py-2  rounded-lg hover:shadow-lg transition-all ease-in-out duration-100"
        >
          Commander maintenant
        </button>
      </div>
      <div className=" py-2 flex-1 flex items-center relative">
        <img
          src={HeroBg}
          className=" ml-auto h-420 w-full lg:w-auto lg:h-650"
          alt="hero-Bg"
        />

        <div className=" w-full h-full absolute top-0 left-0 flex items-center justify-center
        xl:px-16 py-4 gap-4 flex-wrap">
          {heroData &&
            heroData.map((items) => (
              <div
                key={items.id}
                className=" lg:w-190  p-4 bg-cardOverlay backdrop-blur-md rounded-3xl 
                flex flex-col items-center justify-center drop-shadow-lg"
              >
                <img
                  src={items.imageSrc}
                  className=" w-20 lg:w-40 -mt-10 lg:-mt-20"
                  alt={items.name}
                />
                <p className=" text-base lg:text-xl font-semibold text-textColor mt-2 lg:mt-4">
                  {items.name}
                </p>
                <p className="text-[12px] lg:text-sm text-lighttextGray font-semibold my-1 lg:my-3">
                  {items.decp}
                </p>
                <p className=" text-sm font-semibold text-headingColor">
                  {items.price} <span className=" text-xs text-red-600">€</span>
                </p>
              </div>
            ))}
        </div>
      </div>
    </section>
  );
};
