import React from "react";
import Delivery from "./img/delivery.png";
import HeroBg from "./img/heroBg.png";

export const HomeContainer = () => {
  return (
    <section
      className=" grid grid-cols-1 md:grid-cols-2 gap-2 w-full"
      id="home"
    >
      <div
        className=" py-2 flex-1 flex flex-col items-start justify-center 
    gap-4"
      >
        <div
          className=" flex items-center gap-2 justify-center
       bg-orange-100 px-2 py-1 rounded-full"
        >
          <p className=" text-base text-orange-500 font-semibold">Livraison</p>
          <div className=" w-8 h-8 bg-white rounded-full overflow-hidden drop-shadow-xl">
            <img
              src={Delivery}
              className=" w-full h-full object-contain"
              alt="delivery"
            />
          </div>
        </div>

        <p
          className=" text-[2.5rem] font-bold tracking-wide text-headingColor 
      lg:text-[4.25rem]"
        >
          Livraison Rapide Dans{" "}
          <span className=" text-orange-500 text-[3rem] lg:text-[5rem]">
            Ta Ville
          </span>
        </p>

        <p className=" text-base text-textColor text-center md:text-left md:w-[80]">
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
          className=" bg-gradient-to-br from-orange-400 to-orange-500 w-full px-4 py-2 
        rounded-lg hover:shadow-lg transition-all ease-in-out duration-100 md:w-auto"
        >
          Commander maintenant
        </button>
      </div>
      <div className=" py-2 flex-1 flex items-center">
        <img src={HeroBg} className=' ml-auto h:420 w-full lg:w-auto lg:h-650' alt="hero-Bg" />

        <div className=" w-full h-full absolute flex items-center justify-center">

        </div>
      </div>
    </section>
  );
};
