import { Link } from "react-router-dom";
import home from "../icons/home.svg";
import about from "../icons/about.svg";
import addFruit from "../icons/addFruit.svg";
import Menu from "../icons/menu.svg";

import login from "../icons/login.svg";
import signup from "../icons/signup.svg";
import { useState } from "react";

const Navbar = () => {
  const [menu, setMenu] = useState(false);

  return (
    <div className="flex gap-16 items-center justify-around md:justify-center font-bold  text-black  p-5 lg:mx-20 mx-0  bg-gradient-to-r from-red-300 to-orange-300   rounded-xl mb-5 ">
      <Link to={"/"} className="   hover:text-white flex items-center gap-2">
        <img src={home} alt="" className="w-5 h-5 " />
        Home
      </Link>

      <div className="LAPTOP hidden md:flex justify-between lg:gap-20 gap-3 ">
        <Link
          to={"/addfruit"}
          className=" hover:text-white  flex items-center gap-2"
        >
          <img src={addFruit} alt="" className="w-5 h-5 " />
          Add fruit
        </Link>
        <Link
          to={"/about"}
          className=" hover:text-white  flex items-center gap-2 "
        >
          <img src={about} alt="" className="w-5 h-5 " />
          About
        </Link>
        <Link
          to={"/login"}
          className="hover:text-white flex items-center gap-2"
        >
          <img src={login} alt="" className="w-5 h-5 " />
          Login
        </Link>
        <Link
          to={"/signup"}
          className="hover:text-white flex items-center gap-2"
        >
          <img src={signup} alt="" className="w-5 h-5 " />
          Signup
        </Link>
      </div>

      <div className="MOBILE-VIEW lg:hidden  text-black relative ">
        <div className="flex justify-around items-center ">
          <button
            className=" w-5"
            onClick={() => {
              setMenu(!menu);
            }}
          >
            <img src={Menu} alt="" srcset="" />
          </button>
        </div>

        <div
          className={` ${ menu? "grid grid-cols-1 gap-2  text-center p-5 px-[4.5rem] font-semibold   bg-gradient-to-r from-red-300 to-orange-300 rounded-b-xl ": "hidden" } absolute -right-[4.5rem] top-5  w-[25rem] text-black`} >
         
            <Link
              to={"/addfruit"}
              className=" hover:text-white  flex items-center gap-2"
            >
              <img src={addFruit} alt="" className="w-5 h-5 " />
              Add fruit
            </Link>
            <Link
              to={"/about"}
              className=" hover:text-white  flex items-center gap-2 "
            >
              <img src={about} alt="" className="w-5 h-5 " />
              About
            </Link>
            <Link
              to={"/login"}
              className="hover:text-white flex items-center gap-2"
            >
              <img src={login} alt="" className="w-5 h-5 " />
              Login
            </Link>
            <Link
              to={"/signup"}
              className="hover:text-white flex items-center gap-2"
            >
              <img src={signup} alt="" className="w-5 h-5 " />
              Signup
            </Link>
        
        </div>
      </div>
    </div>
  );
};

export default Navbar;
