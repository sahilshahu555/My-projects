'use client'
import Image from 'next/image'
import {useEffect} from "react"
import { useGlobalContext } from "./context/store";
import Main from "@/components/home/Main"
import ServiceHome from '@/components/home/ServiceHome';
import PricingPlane from '@/components/home/PricingPlane';
import PhotoGallery from '@/components/home/PhotoGallery';
export default function Home() {

  const {data,setData,user,setUser,flage,setFlage} =useGlobalContext();
 
useEffect(()=>{
   
},[])




  return (
    <main className="flex justify-between flex-col items-center  ">
        <div className=" w-full">
            <div className="absolute -z-10 w-full ">
              <Image src="https://png.pngtree.com/thumb_back/fh260/background/20230516/pngtree-pair-of-black-scissors-next-to-a-hair-image_2570258.jpg"alt="background" className='w-full  h-[28rem] lg:h-[32rem] ' width={900} height={1000}/>
            </div>
            {/*  "https://png.pngtree.com/thumb_back/fh260/background/20230516/pngtree-pair-of-black-scissors-next-to-a-hair-image_2570258.jpg" */}
        </div>
        <div className="">
              <Main />
             <ServiceHome/>
       {/* for making background Image */}
                  
                  {/* "https://images.unsplash.com/photo-1520338661084-680395057c93?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8N3x8aGFpciUyMGN1dHRpbmd8ZW58MHx8MHx8fDA%3D" */}
       {/* for making background Image */}
             <PricingPlane/>
             <PhotoGallery/>
        </div>
           
       
    </main>
  );
}
