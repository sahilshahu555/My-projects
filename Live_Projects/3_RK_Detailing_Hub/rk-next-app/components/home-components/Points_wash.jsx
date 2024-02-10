import React from 'react'
import Image from "next/image"

const Points_wash = () => {
  return (
    <div className='mt-10 md:mt-16 text-gray-500 '>
       <p className='text-cyan-400 text-xl font-bold  text-center'>WASHING POINT</p>
      <div className='flex flex-col items-center md:flex-row justify-around gap-3 md:gap-10 mt-2  md:mt-8 '>
       
        <div className='w-full md:w-1/2 p-5 text-start flex flex-col gap-5 '>
          <h1 className=' font-[800] md:font-bold text-2xl text-center md:text-3xl w-full '>Car Washing And Detailing Point</h1>
          

          <div className="m-5 flex justify-center items-center gap-5">
          <div className="w-10 md:w-16 ">
              <svg  xmlns="http://www.w3.org/2000/svg" viewBox="0 0 384 512"><path d="M215.7 499.2C267 435 384 279.4 384 192C384 86 298 0 192 0S0 86 0 192c0 87.4 117 243 168.3 307.2c12.3 15.3 35.1 15.3 47.4 0zM192 128a64 64 0 1 1 0 128 64 64 0 1 1 0-128z"/>
              </svg>
          </div>
          <div className=" flex flex-col gap-5">
            <h1 className=" text-lg md:text-2xl font-bold text-cyan-400">RK Washing & Detailling Hub</h1>
            <p className="text-sm md:text-lg font-semibold">123 Street, New York, USA</p>
            <p className="text-sm md:text-lg font-semibold">Call : +012 345 6789</p>
          </div>
        </div>
          
          <button className="bg-cyan-400 p-3 font-bold rounded-full mt-2 w-36 m-auto text-white hover:text-black">Go To Location</button>
        </div>

        <div className='w-full md:w-1/2 rounded-none md:rounded-xl mt-3  md:mt-0 md:p-5'>
        <div class="">
                            <h3>Request for a car wash</h3>
                            <form>
                                <div class="">
                                    <input type="text" class="form-control" placeholder="Name" required="required" />
                                </div>
                                <div class="">
                                    <input type="email" class="form-control" placeholder="Email" required="required" />
                                </div>
                                <div class="">
                                    <textarea class="form-control" placeholder="Description" required="required"></textarea>
                                </div>
                                <div>
                                    <button class="btn btn-custom" type="submit">Send Request</button>
                                </div>
                            </form>
                        </div>
        </div>

      </div>
    </div>
  )
}

export default Points_wash
