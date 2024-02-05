"use client"

import { useGlobalContext } from "@/app/context/store";
import { useState } from "react";
import { useRouter } from 'next/navigation'

const ControlPanel = () => {
    const Router=useRouter()

    const {setFlag,status,setStatus} =useGlobalContext();
    const [selectTag,setSelectTag]=useState("")

    

     const handleSubmit=(e)=>{
        e.preventDefault()
        
        updateEmployee(selectTag,status);
        Router.push("/")
     }


 // Create Update Employee Function
 const updateEmployee = async (selectTag,status) => {
  if(selectTag === "open"){setStatus(true)}
  else if(selectTag === "close"){setStatus(false)}
 if(!status){
  const res = await
      fetch(`/api/salon`, {
          method: 'PUT',
          headers: {
              "content-type": "application/json",
          },
          body: JSON.stringify({
              status: true,
             
          })
      })
      // Create Data 
  const data = await res.json();
  console.log(data)
    }else{
      const res = await
      fetch(`/api/salon`, {
          method: 'PUT',
          headers: {
              "content-type": "application/json",
          },
          body: JSON.stringify({
              status: false,
             
          })
      })
      // Create Data 
  const data = await res.json();
  console.log(data)
    }
  

  // Destructure Data 
  // const { message, error } = data;

  // Condition
  // if (error) {
  //     alert(error) // Error Message
  // }
  // else {
  //     alert(message) // Success Message
  //     Router.push('/') // navigate (/employee/employeelist) route
  // }
}


    console.log(status)
  return (
    <div  className='flex justify-center items-center flex-col w-full text-center mt-10 '>

        <button className='text-white bg-gradient-to-r from-violet-500 to-fuchsia-500 py-1 px-5 m-2 rounded-xl cursor-pointer ... hover:text-black'
        onClick={()=>{setFlag(false) ,Router.push("/")}}
        >Logout</button>

      <form onSubmit={handleSubmit}
      className='text-center border my-10 w-80 flex justify-center items-center flex-col p-10 m-5 gap-3 bg-slate-300 rounded-2xl shadow-lg shadow-violet-400/100 ... ' 
      >

       <h1 className='text-white bg-gradient-to-r from-violet-500 to-fuchsia-500 py-2 px-14 m-2 rounded' > Control Panel </h1>

       
       <label className={`${status?"bg-green-500 hover:bg-green-400":"bg-red-500 hover:bg-red-400  "} p-2.5 rounded-xl text-white text-xs `}>{!status?"SHOP IS CLOSE": "SHOP IS OPEN"} </label>
       <select   onChange={(e)=>{setSelectTag(e.target.value)}} >
            <option  value="close">CLOSE</option>
            <option  value="open">OPEN</option>
       </select>
       
      

       <input type="submit" className='text-white bg-gradient-to-r from-violet-500 to-fuchsia-500 py-1 px-5 mt-10 rounded-xl cursor-pointer ... hover:text-black' />
      </form>
    </div>
  )
}

export default ControlPanel