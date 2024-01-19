
import { Link } from "react-router-dom";
const Navbar = () => {
  return (
    <div className="flex justify-around items-center  font-bold  text-gray-500   p-5 lg:mx-20 mx-0  bg-gradient-to-r from-red-300 to-orange-300   rounded-xl mb-5">
      <Link to={"/"} className="hover:text-gray-500   ">
        Home
      </Link>
      <Link to={"/addfruit"} className="hover:text-black   ">
      Add fruit
      </Link>
      <Link to={"/about"} className="  hover:text-black  ">
        About
      </Link>
      <div className="flex justify-between lg:gap-20 gap-3 ">
        <Link to={"/login"} className="hover:text-black ">
          Login
        </Link>
        <Link to={"/signup"} className="hover:text-black ">
          Signup
        </Link>
      </div>
    </div>
  );
};

export default Navbar;
