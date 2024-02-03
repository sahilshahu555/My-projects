'use client'
import {useEffect} from "react"
import { useGlobalContext } from "./context/store";

export default function Home() {

  const {data,setData,user,setUser,flage,setFlage} =useGlobalContext();
  console.log("start")

  console.log(data,flage)
  console.log("mid")

useEffect(()=>{
    setData([
      {name:"sahil"},
      {name:"harsh"},
      {name:"rajesh"}
    ]);
   setFlage(true);
},[])

console.log("end")

console.log(data,flage)
  return (
    <div className="flex justify-center items-center gap-10 ">
      <div>Home Component</div>
      
    </div>
  );
}
