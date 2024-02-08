"use client"

import { useGlobalContext } from "@/app/context/store";

const Main = () => {
const {status} =useGlobalContext();

  return (
    <div className="Main-Home font-sans  text-white flex flex-col  px-6 md:px-16   justify-around  mt-44   md:w-1/2 gap-5 md:gap-10  mb-14  ">
      <h1 className="text-3xl md:text-5xl font-bold ">BARBERS & HAIR CUTTING </h1>
      <p className="text-thiner  ">The Swapnil Salon is an establishment that offers hair cutting services for men with the high quality hair cutting style at the best cost and comfort.</p>
      <button className={`${status?"bg-green-500 hover:bg-green-400":"bg-red-500 hover:bg-red-400 animate-bounce "}  p-2 rounded w-1/2 -z-10`}>{status?"SHOP IS OPEN NOW" : "SHOP IS CLOSE NOW"} </button>

    </div>
  )
}

export default Main
