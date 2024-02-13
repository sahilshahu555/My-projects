"use client"
import Image from 'next/image'
import React from 'react'

const Team_members = () => {
  return (
    <div className='mt-10 md:mt-10 text-center'>
     <p className='text-cyan-400 text-xl font-bold  '>MEET OUR TEAM</p>
      <h1 className='text-[2.1rem] md:text-[3.5rem] font-[800] leading-normal  md:m-5 text-gray-500 '>Our Engineers & Workers</h1>
     
        <div className='grid grid-cols-2 md:grid-cols-4 gap-5 p-2 md:gap-5  md:p-5 text-white'>

          <div className='bg-cyan-400 shadow-lg shadow-gray-400 '>
              <Image className=" object-cover h-[16rem]" src="https://ik.imagekit.io/6128gd5ra/RK%20Deatailing%20Hub/Team%20Member/RAKESH_PLjd1b6dVt?updatedAt=1707820212145" alt="about-us" width={1000} height={1000} />
              <h1 className='text-2xl font-bold my-3'>Rakesh Katre</h1>
              <p className="my-2">Owner</p>
          </div>

          <div className='bg-cyan-400 shadow-lg shadow-gray-400 '>
              <Image className=" object-cover h-[16rem]" src="https://ik.imagekit.io/6128gd5ra/RK%20Deatailing%20Hub/Team%20Member/Gaurav_FURHjUfY1D?updatedAt=1707820405896" alt="about-us" width={1000} height={1000} />
              <h1 className='text-2xl font-bold my-3'>Gaurav Katre</h1>
              <p className="my-2">Owner</p>
          </div>

          <div className='bg-cyan-400 shadow-lg shadow-gray-400 '>
              <Image className="  h-[16rem]" src="https://ik.imagekit.io/6128gd5ra/RK%20Deatailing%20Hub/Team%20Member/ANIKET_EcTQbBgHr?updatedAt=1707820321592" alt="about-us" width={1000} height={1000} />
              <h1 className='text-2xl font-bold my-3'>Aniket Akhand</h1>
              <p className="my-2">Engineer</p>
          </div>

          <div className='bg-cyan-400 shadow-lg shadow-gray-400 '>
              <Image className=" object-cover h-[16rem]" src="https://ik.imagekit.io/6128gd5ra/RK%20Deatailing%20Hub/Team%20Member/SouthIndian_mWfGQrn_y?updatedAt=1707820278696" alt="about-us" width={1000} height={1000} />
              <h1 className='text-2xl font-bold my-3'>Shashank Uikey</h1>
              <p className="my-2">Engineer</p>
          </div>

        </div>
      

      
    </div>
  )
}

export default Team_members
