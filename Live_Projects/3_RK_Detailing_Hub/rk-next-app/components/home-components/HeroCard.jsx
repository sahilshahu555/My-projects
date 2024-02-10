import Image from 'next/image';
import React from 'react'

const HeroCard = ({elm}) => {
  return (
    <div className="relative h-[20rem] md:h-[32rem]  w-full">
            <div className="absolute -z-10 w-full ">
              <Image src={elm.image} alt="background" className=' h-[20rem] md:h-[32rem] w-full object-cover' width={900} height={1000}/>
            </div>
            <div className="Main-Home font-sans  text-white flex flex-col      text-center     justify-center  items-center   gap-5 md:gap-7   background h-[20rem] md:h-[32rem] ">
                <h3 className="text-lg md:text-xl text-cyan-400 font-semibold ">{elm.title}</h3>
                <h1 className="text-4xl md:text-[5rem] leading-none font-bold w-5/6">{elm.main}</h1>
                {/* <p className='px-2 md:px-0'>{elm.desc}</p> */}
                <button className={`bg-cyan-400 hover:bg-cyan-300 hover:text-black font-bold mt-5 p-2 rounded-full w-36 `}>Explore More ! </button>

            </div>
        </div>
  )
}

export default HeroCard;
