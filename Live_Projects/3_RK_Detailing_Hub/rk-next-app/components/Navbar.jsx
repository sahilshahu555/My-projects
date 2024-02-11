"use client"
import Link from "next/link"
import {useState} from "react"
const Navbar = () => {
    const[menu,setMenu] = useState(false)
  return (

        <div className="NAVBAR ">
            <div className="LAPTOP-VIEW hidden lg:flex justify-around  items-center bg-cyan-400 text-white h-12">
               
                <div className="flex gap-10 ">
                    <Link className="link" href="/">Home</Link>
                    <Link className="link" href="/#SERVICE">Services</Link> 
                    <Link className="link" href="/#ABOUT">About</Link>
                    <Link className="link" href="/#FOOTER">Contacts</Link>
                    <Link className="link" href="/#HERO">Gallery</Link> 
                </div>
                <Link className="link1 bg-white text-cyan-400 px-3 py-1 rounded-full" href="/rk/profile">Profile</Link>

            </div>
            <div className="MOBILE-VIEW lg:hidden bg-cyan-400 text-white  ">
                <div className="flex justify-around items-center p-2">
                    <h1 className="font-semibold text-2xl">Menu</h1>
                    <button className=" w-6" onClick={()=>{setMenu(!menu)}}>
                        <svg  xmlns="http://www.w3.org/2000/svg" viewBox="0 0 448 512"><path d="M0 96C0 78.3 14.3 64 32 64H416c17.7 0 32 14.3 32 32s-14.3 32-32 32H32C14.3 128 0 113.7 0 96zM0 256c0-17.7 14.3-32 32-32H416c17.7 0 32 14.3 32 32s-14.3 32-32 32H32c-17.7 0-32-14.3-32-32zM448 416c0 17.7-14.3 32-32 32H32c-17.7 0-32-14.3-32-32s14.3-32 32-32H416c17.7 0 32 14.3 32 32z"/>
                        </svg>
                    </button>
                </div>

                <div className={` ${menu?"grid grid-cols-3 gap-2  text-center p-3 font-semibold ":"hidden"}   `}>
                    <Link className="link1" href="/">Home</Link>
                    <Link className="link1" href="/rk/gallery">Gallery</Link> 
                    <Link className="link1" href="/rk/service">Services</Link> 
                    <Link className="link1" href="/rk/about">About</Link>
                    <Link className="link1" href="/rk/contacts">Contacts</Link>
                    <Link className="link1 bg-white hover:bg-cyan-400  text-cyan-400 w-20 m-auto py-1 rounded-full" href="/rk/profile">Profile</Link>
                </div>

            </div>
        </div>

    
  )
}

export default Navbar