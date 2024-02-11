"use client"
import React from "react";

import Link from "next/link";

const Points_wash = () => {
  return (
    <div className="mt-10 md:mt-16 text-gray-500 rounded-xl shadow-md shadow-cyan-400 bg-white w-full md:w-3/5 m-auto pt-10">
      <p className="text-cyan-400 text-xl font-bold  text-center">
        WASHING POINT
      </p>
      
        <div className="w-full  p-5  flex flex-col justify-around items-center gap-5 ">
          <h1 className=" font-[800] md:font-bold text-2xl text-center md:text-3xl w-full ">Car Washing And Detailing Point
          </h1>

          <div className="m-5 flex justify-center items-center gap-10">
            <div className="w-16 md:w-16 ">
              <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 384 512">
                <path d="M215.7 499.2C267 435 384 279.4 384 192C384 86 298 0 192 0S0 86 0 192c0 87.4 117 243 168.3 307.2c12.3 15.3 35.1 15.3 47.4 0zM192 128a64 64 0 1 1 0 128 64 64 0 1 1 0-128z" />
              </svg>
            </div>
            <div className=" flex flex-col gap-2">
              <h1 className=" text-lg md:text-2xl font-bold text-cyan-400">
                RK Washing & Detailling Hub
              </h1>
              <p className="text-sm md:text-lg font-semibold">
              Janki talkies, metro station Bank of Maharashtra, munje square, opposite Bank of Maharashtra, Nagpur, Maharashtra 440012
              </p>
              <p className="text-sm md:text-lg font-semibold">
                Call : +012 345 6789
              </p>
            </div>
          </div>
          
          <Link href="https://maps.app.goo.gl/CEVSMVpiMkTzD6Zx9">
            <button className="bg-cyan-400 p-3 font-bold rounded-full mt-2 w-36 m-auto text-white hover:text-black ">
              Go To Location
            </button>
          </Link>
        </div>

        
      
    </div>
  );
};

export default Points_wash;
