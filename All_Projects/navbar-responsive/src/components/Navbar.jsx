import { useState } from "react"
import { Link } from "react-router-dom"


const Navbar = () => {

    const [flage, setFlage]=useState(false)
  return (
    <div className="relative border rounded-lg border-white flex justify-around p-2 items-center m-5 lg:m-2 ">
        <div >
            <img className="rounded-2xl" src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcS5atWmj84TncDKY7gJoMNrMZI_3tMEMi12uN45m1g&usqp=CAI&s" alt="" />
        </div>
        <div className="hidden md:flex justify-around items-center gap-8 ">
            <Link className="link" to={"/"}>Home</Link>
            <Link className="link" to={"/"}>Contacts</Link>
            <Link className="link" to={"/"}>Product</Link>
            <Link className="link" to={"/"}>Services</Link>
            <Link className="link" to={"/"}>About</Link>
           
           
        </div>

        <div>
        <Link className="link bg-red-500 rounded p-2" to={"/login"}>Login</Link>
         
        </div>

        <div className="md:hidden flex justify-end items-center ">
       
          {!flage?(
          <button className=" link w-16 bg-red-500 rounded px-3 py-1 font-bold" onClick={()=>setFlage(!flage)} >Menu</button>
          ):
          (<div  onClick={()=>{setFlage(!flage)}}>
               <button className="w-16 bg-red-500 rounded px-3 p-1" >︽</button>
                <div className="flex flex-row absolute mt-9 right-0 p-2 border-2  rounded-b-3xl border-red-400 bg-gray-300 text-black w-full justify-around items-center font-medium gap-1  flex-wrap ">
                    <Link className="link  " to={"/"}>Home</Link>
                    <Link className="link" to={"/"}>Contacts</Link>
                    <Link className="link" to={"/"}>Product</Link>
                    <Link className="link" to={"/"}>Services</Link>
                    
                   
                </div>
            </div>
          )}
           
        </div>

        
        

    </div>
  )
}

export default Navbar