"use client"
import Image from "next/image"
import Link from "next/link"
const Topbar = () => {
  return (
    <div className="TOPBAR flex justify-around items center p-2   border-b-2 border-cyan-400">
    <Link href="/">
            <div className="LOGO & NAME flex items-center">
            <Image src="https://ik.imagekit.io/6128gd5ra/RK%20Deatailing%20Hub/Logo/rk-logo_qiou2b4jv?updatedAt=1707484104840"className="w-14" width={1000} height={1000} alt="photo"/>
                <h1 className="text-3xl font-[900] text-gray-500 " > <span className="text-cyan-400">Washing</span>Hub</h1>
            </div>
    </Link>
   
    <div className="hidden md:flex md:gap-5 lg:gap-14 items-center text-gray-500 ">
            <div className="CLOCK  flex items-center 
            gap-4 ">
                <div className="w-8 "> 
                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512"><path d="M256 0a256 256 0 1 1 0 512A256 256 0 1 1 256 0zM232 120V256c0 8 4 15.5 10.7 20l96 64c11 7.4 25.9 4.4 33.3-6.7s4.4-25.9-6.7-33.3L280 243.2V120c0-13.3-10.7-24-24-24s-24 10.7-24 24z"/></svg>
                </div>
        
                <div className="phone">
                    <h1 className="font-semibold "><span className="text-cyan-400">Opening</span> Hour</h1>
                    <p className="text-xs text-gray-500 ">Mon - Sun, 8:00 am - 9:00 pm</p>
                </div>



            </div>
            
            <div className="CALL flex items-center 
            gap-4 ">
                <div className="w-8 "> 
                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 448 512"><path d="M64 32C28.7 32 0 60.7 0 96V416c0 35.3 28.7 64 64 64H384c35.3 0 64-28.7 64-64V96c0-35.3-28.7-64-64-64H64zm90.7 96.7c9.7-2.6 19.9 2.3 23.7 11.6l20 48c3.4 8.2 1 17.6-5.8 23.2L168 231.7c16.6 35.2 45.1 63.7 80.3 80.3l20.2-24.7c5.6-6.8 15-9.2 23.2-5.8l48 20c9.3 3.9 14.2 14 11.6 23.7l-12 44C336.9 378 329 384 320 384C196.3 384 96 283.7 96 160c0-9 6-16.9 14.7-19.3l44-12z"/>
                </svg>
                </div>
        
                <div className="call">
                    <h1 className="font-semibold"><span className="text-cyan-400">Call </span>Us</h1>
                    <p className="text-xs text-gray-500 ">+012 345 6789</p>
                </div>
            </div>

            <div className="EMAIL flex items-center 
            gap-4 ">
                <div className="w-8 "> 
                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512"><path d="M48 64C21.5 64 0 85.5 0 112c0 15.1 7.1 29.3 19.2 38.4L236.8 313.6c11.4 8.5 27 8.5 38.4 0L492.8 150.4c12.1-9.1 19.2-23.3 19.2-38.4c0-26.5-21.5-48-48-48H48zM0 176V384c0 35.3 28.7 64 64 64H448c35.3 0 64-28.7 64-64V176L294.4 339.2c-22.8 17.1-54 17.1-76.8 0L0 176z"/></svg>
                </div>
        
                <div className="email">
                    <h1 className="font-semibold"><span className="text-cyan-400">Email </span> Us</h1>
                    <p className="text-xs text-gray-500 ">info@example.com</p>
                </div>
            </div>
    </div>
</div>
  )
}

export default Topbar

