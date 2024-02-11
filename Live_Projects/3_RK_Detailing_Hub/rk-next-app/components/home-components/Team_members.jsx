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
              <Image className=" object-cover h-[16rem]" src="https://media.istockphoto.com/id/1262579093/photo/industrial-worker-at-factory.jpg?s=612x612&w=0&k=20&c=4sHKrkiUA1E7tTx0za-ND6m8YDxVJvIw0P3B8HAYq2M=" alt="about-us" width={1000} height={1000} />
              <h1 className='text-2xl font-bold my-3'>Donald John</h1>
              <p className="my-2">Engineer</p>
          </div>

          <div className='bg-cyan-400 shadow-lg shadow-gray-400 '>
              <Image className=" object-cover h-[16rem]" src="https://media.istockphoto.com/id/1289143731/photo/happy-black-auto-mechanic-working-at-car-workshop-and-looking-at-camera.jpg?s=612x612&w=0&k=20&c=cc27VbVEuPaQXvsYkbJgkA8_Fg3ujO77naKloXJ6pcY=" alt="about-us" width={1000} height={1000} />
              <h1 className='text-2xl font-bold my-3'>Adam Phillips</h1>
              <p className="my-2">Engineer</p>
          </div>

          <div className='bg-cyan-400 shadow-lg shadow-gray-400 '>
              <Image className=" object-cover h-[16rem]" src="https://media.istockphoto.com/id/1272132640/photo/auto-mechanic-examining-engine-of-car.jpg?s=612x612&w=0&k=20&c=EuF6TQFlDL-bSA3Xv4JubXPkuncMMLidyquLrZoieWY=" alt="about-us" width={1000} height={1000} />
              <h1 className='text-2xl font-bold my-3'>Thomas Olsen</h1>
              <p className="my-2">Worker</p>
          </div>

          <div className='bg-cyan-400 shadow-lg shadow-gray-400 '>
              <Image className=" object-cover h-[16rem]" src="https://media.istockphoto.com/id/153989336/photo/portrait-of-smiling-mechanic-holding-tire-in-auto-repair-shop.jpg?s=612x612&w=0&k=20&c=e6d51vRzHQKwMMlX6sqye8OikATBGFuDtAaMj-IfCKY=" alt="about-us" width={1000} height={1000} />
              <h1 className='text-2xl font-bold my-3'>James Alien</h1>
              <p className="my-2">Worker</p>
          </div>

        </div>
      

      
    </div>
  )
}

export default Team_members
