"use client"

import Link from "next/link"
import { useState } from "react"


const Navbar = () => {

    const [flage,setFlage]=useState(false)

  return (
    <div className="flex justify-around items-center w-full bg-black text-white mb-10">
          <div className="LOGO flex flex-col text-center m-2 md:m-1 py-1 px-3 shadow-sm  shadow-red-500  rounded-lg">
            <Link href="/"> 
             <h1 className=" font-bold gradientText  ">SWAPNIL</h1>
             <p className="text-xs font-bold text-slate-300">Hair Salon</p>
             </Link>
          </div>
          <div className="LAPTOP hidden md:flex justify-between w-1/2 items-center ">
             <Link className="link1" href="/">Home</Link>
             <Link className="link1" href="/salon/hairStyle">Hair Style</Link>
             <Link className="link1" href="/salon/about">About</Link>
             <Link className="link1" href="/salon/contact">Contacts</Link>
          </div>
          <div className="MOBILE flex md:hidden">
           {!flage?(
            <button className="w-16 bg-red-500 hover:bg-red-400 " onClick={()=>setFlage(!flage)}>Menu</button>
           ):(
            <div  onClick={()=>setFlage(!flage)}>
                 <button className="w-16 bg-red-500 hover:bg-red-400" >Close</button>
                 <div className=" flex flex-col gap-3 justify-around items-center w-32 absolute top-12 right-7 rounded-b-xl  p-5  bg-gray-500   duration-700 ">
                        <Link className="link" href="/">Home</Link>
                        <Link className="link" href="/salon/hairStyle">Hair Style</Link>
                        <Link className="link" href="/salon/about">About</Link>
                        <Link className="link" href="/salon/contact">Contacts</Link>
                        <Link className="bg-blue-500 text-white text-center duration-300 hover:bg-red-300 hover:font-medium  px-1 rounded hover:text-black w-24" href="/salon/profile">Login</Link>
                </div>
            </div>
           )}
          </div>
          <div className="PROFILE hidden  lg:flex text-slate-300 font-semibold bg-blue-500 rounded px-3 hover:bg-red-400 hover:text-black ">
            <Link href="/salon/profile">Login</Link>
          </div>
    </div>
  )
}

export default Navbar
