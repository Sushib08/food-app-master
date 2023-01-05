import React from 'react';
import NotFound from "../img/NotFound.svg";

export const MaintenanceContainer = () => {
  return (
    <div className=" w-full flex flex-col items-center justify-center">
          <img src={NotFound} alt="not found" className=" h-340" />
          <p className=" text-xl text-headingColor font-semibold my-2">
            Ooops, Page en construction ...
          </p>
        </div>
  )
}
