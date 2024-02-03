"use client"

import Link from "next/link"
import { useState } from "react"


const Navbar = () => {

    const [flage,setFlage]=useState(false)
    const [colorChange, setColorchange] = useState(false);
    if(typeof window !== "undefined"){
      window.addEventListener("scroll", () => {
        if (window.scrollY >= 50) {
          setColorchange(true);
        } else {
          setColorchange(false);
        }
      });
    } 


  return (
    <div className={`flex z-100 justify-around items-center w-full ${!colorChange? "bg-transparent":"bg-black" } text-white`}>
          <div className="LOGO flex flex-col text-center bg-black m-3 md:m-1 py-1 px-3 shadow-sm  shadow-red-500  rounded-lg">
            <Link href="/"> 
             <h1 className=" font-bold gradientText1 tracking-wider ">The SWAPNIL</h1>
             <p className="text-xs font-bold gradientText ">Hair Salon</p>
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
            <button className="w-16 p-2 rounded bg-red-500 hover:bg-red-400 " onClick={()=>setFlage(!flage)}>Menu</button>
           ):(
            <div  onClick={()=>setFlage(!flage)}>
                 <button className="w-16 p-2 rounded bg-red-500 hover:bg-red-400" >Close</button>
                 <div className=" flex flex-col gap-3 justify-around items-center w-32 absolute z-100 top-16 right-1 rounded-b-xl  p-5  bg-black   duration-700 ">
                        <Link className="link" href="/">Home</Link>
                        <Link className="link" href="/salon/hairStyle">Hair Style</Link>
                        <Link className="link" href="/salon/about">About</Link>
                        <Link className="link" href="/salon/contact">Contacts</Link>
                        <Link className="bg-red-500 text-white text-center duration-300 hover:bg-red-300 hover:font-medium  px-1 rounded hover:text-black w-24" href="/salon/profile">Login</Link>
                </div>
            </div>
           )}
          </div>
          <div className="PROFILE hidden  lg:flex text-white font-semibold bg-red-500 rounded px-3 hover:bg-red-400 hover:text-black ">
            <Link href="/salon/profile">Login</Link>
          </div>
    </div>
  )
}

export default Navbar
