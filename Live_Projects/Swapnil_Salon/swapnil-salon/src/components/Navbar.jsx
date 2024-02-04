"use client"

import Link from "next/link"
import { useState } from "react"
import { useGlobalContext } from '@/app/context/store'


const Navbar = () => {
  const {status} =useGlobalContext();

    const [flage,setFlage]=useState(false)
    const [colorChange, setColorchange] = useState(false);
    if(typeof window !== "undefined"){
      window.addEventListener("scroll", () => {
        if (window.scrollY >= 30) {
          setColorchange(true);
        } else {
          setColorchange(false);
        }
      });
    } 


  return (
    <div id="navbar" className={`flex z-100 justify-around items-center w-full ${!colorChange? "bg-transparent":"bg-black" } text-white`}>
          <div className="LOGO flex flex-col text-center  m-3 md:m-1 py-1 px-3 shadow-sm  shadow-red-100  rounded-lg">
            <Link href="/"> 
             <h1 className=" font-bold gradientText1 tracking-wider ">SWAPNIL</h1>
             <p className="text-xs font-bold  ">Hair Salon</p>
             </Link>
          </div>
          <div className="LAPTOP hidden md:flex justify-between w-1/2 items-center font-sans ">
             <Link className="link1" href="/">Home</Link>
             <Link className="link1" href="/salon/hairStyle">Hair Style</Link>
             <Link className="link1" href="/salon/about">About</Link>
             
          </div>
          <div className="MOBILE flex md:hidden">
           {!flage?(
            <button className={`${status?"bg-green-500 hover:bg-green-400":"bg-red-500 hover:bg-red-400"} w-10 p-2 rounded   `} onClick={()=>setFlage(!flage)}><svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6">
            <path strokeLinecap="round" strokeLinejoin="round" d="M3.75 6.75h16.5M3.75 12h16.5m-16.5 5.25h16.5" />
          </svg>
          </button>
           ):(
            <div  onClick={()=>setFlage(!flage)}>
                 <button className={`${status?"bg-green-500 hover:bg-green-400":"bg-red-500 hover:bg-red-400"} w-10 p-2 rounded   `} >X</button>
                 <div className=" flex flex-col gap-4 justify-around items-center w-32 absolute z-100 top-16 right-2 rounded-b-xl  p-5 text-black bg-gray-300   duration-700 ">
                        <Link className="link" href="/">Home</Link>
                        <Link className="link" href="/salon/hairStyle">Hair Style</Link>
                        <Link className="link" href="/salon/about">About</Link>
                        <Link className={`${status?"bg-green-500 hover:bg-green-300":"bg-red-500 hover:bg-red-300 "} text-white text-center duration-300  hover:font-medium  px-1 rounded hover:text-black w-24`} href="/salon/profile">Profile</Link>
                </div>
            </div>
           )}
          </div>
          <div className={` ${status?"bg-green-500":"bg-red-500 "} PROFILE hidden  lg:flex text-white font-semibold  rounded px-3 hover:bg-yellow-400 hover:text-black `}>
            <Link href="/salon/profile">Profile</Link>
          </div>
    </div>
  )
}

export default Navbar
