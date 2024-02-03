'use client'
import Image from 'next/image'
import {useEffect} from "react"
import { useGlobalContext } from "./context/store";
import Main from "@/components/home/Main"
export default function Home() {

  const {data,setData,user,setUser,flage,setFlage} =useGlobalContext();
 
useEffect(()=>{
   
},[])




  return (
    <main className="flex justify-between flex-col items-center  ">
        <div className="relative w-full">
            <div className="absolute -z-10 w-full ">
              <Image src="https://png.pngtree.com/thumb_back/fh260/background/20230516/pngtree-pair-of-black-scissors-next-to-a-hair-image_2570258.jpg"alt="background" className='w-full  h-[30rem] lg:h-[36rem] ' width={1000} height={1000}/>
            </div>
           
             <Main />
           
        </div>
    </main>
  );
}
