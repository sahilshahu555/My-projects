import Image from 'next/image';
import React from 'react'

const About_home = () => {
  return (
    <div className='mt-10 md:mt-16'>
      <h1 className='text-cyan-400 text-center font-bold text-3xl'>About Us</h1>
      <div className='flex flex-col md:flex-row justify-around gap-3 md:gap-10 mt-2  md:mt-8 '>
        <div className='w-full md:w-1/2 rounded-none md:rounded-xl mt-3  md:mt-0 md:p-5'>
          <Image className="h-[24rem] md:h-[32rem] lg:h-[25rem] rounded-none  md:rounded-2xl" src="https://ik.imagekit.io/6128gd5ra/RK%20Deatailing%20Hub/img/about.jpg?updatedAt=1707473093753" alt="about-us" width={1000} height={1000} />
        </div>
        <div className='w-full md:w-1/2 p-5 text-start flex flex-col gap-5 '>
          <h1 className='text-gray-500  font-[800] md:font-bold text-2xl text-center md:text-4xl w-full font-serif'>Car Washing And Detailing</h1>
          <p className='text-gray-500  '>Car detailing is the process of improving the condition of a vehicle's interior and exterior appearance. <span className="hidden md:inline">This involves the most thorough clean possible, any enhancement to deal with minor defects such as clear coat scratches, and protection to maintain the condition.</span>
          </p>

          <div className=" grid  grid-cols-2 gap-4 mt-2 ">
          
              

              <div className='flex gap-2 '>
                <svg  className="w-5 bg-cyan-400 rounded-2xl p-1  " xmlns="http://www.w3.org/2000/svg" viewBox="0 0 448 512"><path d="M438.6 105.4c12.5 12.5 12.5 32.8 0 45.3l-256 256c-12.5 12.5-32.8 12.5-45.3 0l-128-128c-12.5-12.5-12.5-32.8 0-45.3s32.8-12.5 45.3 0L160 338.7 393.4 105.4c12.5-12.5 32.8-12.5 45.3 0z"/>
                </svg> 
                <p >Seats washing</p>   
              </div>
              <div className='flex gap-2 '>
                <svg  className="w-5 bg-cyan-400 rounded-2xl p-1 " xmlns="http://www.w3.org/2000/svg" viewBox="0 0 448 512"><path d="M438.6 105.4c12.5 12.5 12.5 32.8 0 45.3l-256 256c-12.5 12.5-32.8 12.5-45.3 0l-128-128c-12.5-12.5-12.5-32.8 0-45.3s32.8-12.5 45.3 0L160 338.7 393.4 105.4c12.5-12.5 32.8-12.5 45.3 0z"/>
                </svg> 
                <p>Vacuum cleaning</p>   
              </div>

              <div className='flex gap-2 ' >
                <svg  className="w-5 bg-cyan-400 rounded-2xl p-1 " xmlns="http://www.w3.org/2000/svg" viewBox="0 0 448 512"><path d="M438.6 105.4c12.5 12.5 12.5 32.8 0 45.3l-256 256c-12.5 12.5-32.8 12.5-45.3 0l-128-128c-12.5-12.5-12.5-32.8 0-45.3s32.8-12.5 45.3 0L160 338.7 393.4 105.4c12.5-12.5 32.8-12.5 45.3 0z"/>
                </svg> 
                <p>Interior cleaning</p>   
              </div>

              <div className='flex gap-2 ' >
                <svg  className="w-5 bg-cyan-400 rounded-2xl p-1  " xmlns="http://www.w3.org/2000/svg" viewBox="0 0 448 512"><path d="M438.6 105.4c12.5 12.5 12.5 32.8 0 45.3l-256 256c-12.5 12.5-32.8 12.5-45.3 0l-128-128c-12.5-12.5-12.5-32.8 0-45.3s32.8-12.5 45.3 0L160 338.7 393.4 105.4c12.5-12.5 32.8-12.5 45.3 0z"/>
                </svg> 
                <p>Window wiping</p>   
              </div>

              <div className='flex gap-2 ' >
                <svg  className="w-5 bg-cyan-400 rounded-2xl p-1  " xmlns="http://www.w3.org/2000/svg" viewBox="0 0 448 512"><path d="M438.6 105.4c12.5 12.5 12.5 32.8 0 45.3l-256 256c-12.5 12.5-32.8 12.5-45.3 0l-128-128c-12.5-12.5-12.5-32.8 0-45.3s32.8-12.5 45.3 0L160 338.7 393.4 105.4c12.5-12.5 32.8-12.5 45.3 0z"/>
                </svg> 
                <p>Exterior Washing</p>   
              </div>
            
              <div className='flex gap-2 ' >
                <svg  className="w-5 bg-cyan-400 rounded-2xl p-1  " xmlns="http://www.w3.org/2000/svg" viewBox="0 0 448 512"><path d="M438.6 105.4c12.5 12.5 12.5 32.8 0 45.3l-256 256c-12.5 12.5-32.8 12.5-45.3 0l-128-128c-12.5-12.5-12.5-32.8 0-45.3s32.8-12.5 45.3 0L160 338.7 393.4 105.4c12.5-12.5 32.8-12.5 45.3 0z"/>
                </svg> 
                <p>Wet Cleaning</p>   
              </div>

              <div className='flex gap-2 ' >
                <svg  className="w-5 bg-cyan-400 rounded-2xl p-1  " xmlns="http://www.w3.org/2000/svg" viewBox="0 0 448 512"><path d="M438.6 105.4c12.5 12.5 12.5 32.8 0 45.3l-256 256c-12.5 12.5-32.8 12.5-45.3 0l-128-128c-12.5-12.5-12.5-32.8 0-45.3s32.8-12.5 45.3 0L160 338.7 393.4 105.4c12.5-12.5 32.8-12.5 45.3 0z"/>
                </svg> 
                <p>Oil Changing</p>   
              </div>

              <div className='flex gap-2 ' >
                <svg  className="w-5 bg-cyan-400 rounded-2xl p-1  " xmlns="http://www.w3.org/2000/svg" viewBox="0 0 448 512"><path d="M438.6 105.4c12.5 12.5 12.5 32.8 0 45.3l-256 256c-12.5 12.5-32.8 12.5-45.3 0l-128-128c-12.5-12.5-12.5-32.8 0-45.3s32.8-12.5 45.3 0L160 338.7 393.4 105.4c12.5-12.5 32.8-12.5 45.3 0z"/>
                </svg> 
                <p>Brake Reparing</p>   
              </div>

          </div>
          
          <button className="bg-cyan-400 p-3 font-bold rounded-full mt-2 w-36 text-white hover:text-black">Learn More</button>
        </div>

      </div>
    </div>
  )
}

export default About_home;
