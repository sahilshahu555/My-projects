"use client"

const Washing_plan = () => {
 
  return (
    <div className="m-2 md:m-10 mt-10  text-center  ">
      <p className='text-cyan-400 text-xl font-bold  '>WASHING PLANS</p>
      <h1 className='text-[2.1rem] md:text-[3.5rem] font-[800] leading-normal m-8 md:m-8 text-gray-500 '>Choose Your Plan</h1>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 mt-10  m-4 gap-10 md:gap-5 ">

          <div className="BASIC CLEANING text-center service-icon bg-white p-2 md:p-5  flex flex-col gap-2 md:gap-5 rounded-xl shadow-md shadow-cyan-200">
                <p className='text-cyan-400 font-semibold'>BASIC CLEANING</p>
                <h1 className='text-3xl text-gray-500 font-[900]'>₹ 150</h1>
                <div className=" grid  grid-cols-2 p-5 gap-3 md:gap-4 mt-2 text-xs md:text-xs">
            
                

                <div className='flex items-center gap-2 '>
                <svg className="w-5 bg-gray-400 rounded-2xl p-1 " xmlns="http://www.w3.org/2000/svg" viewBox="0 0 384 512"><path d="M342.6 150.6c12.5-12.5 12.5-32.8 0-45.3s-32.8-12.5-45.3 0L192 210.7 86.6 105.4c-12.5-12.5-32.8-12.5-45.3 0s-12.5 32.8 0 45.3L146.7 256 41.4 361.4c-12.5 12.5-12.5 32.8 0 45.3s32.8 12.5 45.3 0L192 301.3 297.4 406.6c12.5 12.5 32.8 12.5 45.3 0s12.5-32.8 0-45.3L237.3 256 342.6 150.6z"/></svg>
                  <p >Seats washing</p>   
                </div>

                <div className='flex items-center gap-2 ' >
                  <svg  className="w-5 bg-cyan-400 rounded-2xl p-1  " xmlns="http://www.w3.org/2000/svg" viewBox="0 0 448 512"><path d="M438.6 105.4c12.5 12.5 12.5 32.8 0 45.3l-256 256c-12.5 12.5-32.8 12.5-45.3 0l-128-128c-12.5-12.5-12.5-32.8 0-45.3s32.8-12.5 45.3 0L160 338.7 393.4 105.4c12.5-12.5 32.8-12.5 45.3 0z"/>
                  </svg> 
                  <p>Exterior Washing</p>   
                </div>
                
                <div className='flex items-center  gap-2 ' >
                <svg className="w-5 bg-gray-400 rounded-2xl p-1 " xmlns="http://www.w3.org/2000/svg" viewBox="0 0 384 512"><path d="M342.6 150.6c12.5-12.5 12.5-32.8 0-45.3s-32.8-12.5-45.3 0L192 210.7 86.6 105.4c-12.5-12.5-32.8-12.5-45.3 0s-12.5 32.8 0 45.3L146.7 256 41.4 361.4c-12.5 12.5-12.5 32.8 0 45.3s32.8 12.5 45.3 0L192 301.3 297.4 406.6c12.5 12.5 32.8 12.5 45.3 0s12.5-32.8 0-45.3L237.3 256 342.6 150.6z"/></svg>
                  
                  <p>Interior cleaning</p>   
                </div>

                <div className='flex items-center gap-2 ' >
                  <svg  className="w-5 bg-cyan-400 rounded-2xl p-1  " xmlns="http://www.w3.org/2000/svg" viewBox="0 0 448 512"><path d="M438.6 105.4c12.5 12.5 12.5 32.8 0 45.3l-256 256c-12.5 12.5-32.8 12.5-45.3 0l-128-128c-12.5-12.5-12.5-32.8 0-45.3s32.8-12.5 45.3 0L160 338.7 393.4 105.4c12.5-12.5 32.8-12.5 45.3 0z"/>
                  </svg> 
                  <p>Window wiping</p>   
                </div>

                <div className='flex items-center gap-2 '>
                <svg className="w-5 bg-gray-400 rounded-2xl p-1 " xmlns="http://www.w3.org/2000/svg" viewBox="0 0 384 512"><path d="M342.6 150.6c12.5-12.5 12.5-32.8 0-45.3s-32.8-12.5-45.3 0L192 210.7 86.6 105.4c-12.5-12.5-32.8-12.5-45.3 0s-12.5 32.8 0 45.3L146.7 256 41.4 361.4c-12.5 12.5-12.5 32.8 0 45.3s32.8 12.5 45.3 0L192 301.3 297.4 406.6c12.5 12.5 32.8 12.5 45.3 0s12.5-32.8 0-45.3L237.3 256 342.6 150.6z"/></svg>
                  <p>Vacuum cleaning</p>   
                </div>

                <div className='flex items-center gap-2 ' >
                  <svg  className="w-5 bg-cyan-400 rounded-2xl p-1  " xmlns="http://www.w3.org/2000/svg" viewBox="0 0 448 512"><path d="M438.6 105.4c12.5 12.5 12.5 32.8 0 45.3l-256 256c-12.5 12.5-32.8 12.5-45.3 0l-128-128c-12.5-12.5-12.5-32.8 0-45.3s32.8-12.5 45.3 0L160 338.7 393.4 105.4c12.5-12.5 32.8-12.5 45.3 0z"/>
                  </svg> 
                  <p>Wet Cleaning</p>   
                </div>

                <div className='flex items-center gap-2 ' >
                <svg className="w-5 bg-gray-400 rounded-2xl p-1 " xmlns="http://www.w3.org/2000/svg" viewBox="0 0 384 512"><path d="M342.6 150.6c12.5-12.5 12.5-32.8 0-45.3s-32.8-12.5-45.3 0L192 210.7 86.6 105.4c-12.5-12.5-32.8-12.5-45.3 0s-12.5 32.8 0 45.3L146.7 256 41.4 361.4c-12.5 12.5-12.5 32.8 0 45.3s32.8 12.5 45.3 0L192 301.3 297.4 406.6c12.5 12.5 32.8 12.5 45.3 0s12.5-32.8 0-45.3L237.3 256 342.6 150.6z"/></svg> 
                  <p>Oil Changing</p>   
                </div>

                <div className='flex items-center gap-2 ' >
                  <svg  className="w-5 bg-cyan-400 rounded-2xl p-1  " xmlns="http://www.w3.org/2000/svg" viewBox="0 0 448 512"><path d="M438.6 105.4c12.5 12.5 12.5 32.8 0 45.3l-256 256c-12.5 12.5-32.8 12.5-45.3 0l-128-128c-12.5-12.5-12.5-32.8 0-45.3s32.8-12.5 45.3 0L160 338.7 393.4 105.4c12.5-12.5 32.8-12.5 45.3 0z"/>
                  </svg> 
                  <p>Brake Reparing</p>   
                </div>

                </div>
                <button className="bg-cyan-400 text-white hover:text-black w-36 m-auto p-1 rounded-xl font-bold my-2">Book Now</button>
                

          </div>

          <div className="PREMIUM CLEANING text-center service-icon bg-white p-2 md:p-5  flex flex-col gap-2 md:gap-5 rounded-xl shadow-md shadow-cyan-200">
                <p className='text-cyan-400 font-semibold'>PREMIUM CLEANING</p>
                <h1 className='text-3xl text-gray-500 font-[900]'>₹ 300</h1>
                <div className=" grid  grid-cols-2 p-5 gap-3 md:gap-4 mt-2 text-xs md:text-xs">
            
                

                <div className='flex items-center gap-2 '>
                <svg  className="w-5 bg-cyan-400 rounded-2xl p-1  " xmlns="http://www.w3.org/2000/svg" viewBox="0 0 448 512"><path d="M438.6 105.4c12.5 12.5 12.5 32.8 0 45.3l-256 256c-12.5 12.5-32.8 12.5-45.3 0l-128-128c-12.5-12.5-12.5-32.8 0-45.3s32.8-12.5 45.3 0L160 338.7 393.4 105.4c12.5-12.5 32.8-12.5 45.3 0z"/>
                  </svg> 
                  <p >Seats washing</p>   
                </div>

                <div className='flex items-center gap-2 ' >
                  <svg  className="w-5 bg-cyan-400 rounded-2xl p-1  " xmlns="http://www.w3.org/2000/svg" viewBox="0 0 448 512"><path d="M438.6 105.4c12.5 12.5 12.5 32.8 0 45.3l-256 256c-12.5 12.5-32.8 12.5-45.3 0l-128-128c-12.5-12.5-12.5-32.8 0-45.3s32.8-12.5 45.3 0L160 338.7 393.4 105.4c12.5-12.5 32.8-12.5 45.3 0z"/>
                  </svg> 
                  <p>Exterior Washing</p>   
                </div>
                
                <div className='flex items-center  gap-2 ' >
                <svg  className="w-5 bg-cyan-400 rounded-2xl p-1  " xmlns="http://www.w3.org/2000/svg" viewBox="0 0 448 512"><path d="M438.6 105.4c12.5 12.5 12.5 32.8 0 45.3l-256 256c-12.5 12.5-32.8 12.5-45.3 0l-128-128c-12.5-12.5-12.5-32.8 0-45.3s32.8-12.5 45.3 0L160 338.7 393.4 105.4c12.5-12.5 32.8-12.5 45.3 0z"/>
                  </svg> 
                  
                  <p>Interior cleaning</p>   
                </div>

                <div className='flex items-center gap-2 ' >
                  <svg  className="w-5 bg-cyan-400 rounded-2xl p-1  " xmlns="http://www.w3.org/2000/svg" viewBox="0 0 448 512"><path d="M438.6 105.4c12.5 12.5 12.5 32.8 0 45.3l-256 256c-12.5 12.5-32.8 12.5-45.3 0l-128-128c-12.5-12.5-12.5-32.8 0-45.3s32.8-12.5 45.3 0L160 338.7 393.4 105.4c12.5-12.5 32.8-12.5 45.3 0z"/>
                  </svg> 
                  <p>Window wiping</p>   
                </div>

                <div className='flex items-center gap-2 '>
                <svg className="w-5 bg-gray-400 rounded-2xl p-1 " xmlns="http://www.w3.org/2000/svg" viewBox="0 0 384 512"><path d="M342.6 150.6c12.5-12.5 12.5-32.8 0-45.3s-32.8-12.5-45.3 0L192 210.7 86.6 105.4c-12.5-12.5-32.8-12.5-45.3 0s-12.5 32.8 0 45.3L146.7 256 41.4 361.4c-12.5 12.5-12.5 32.8 0 45.3s32.8 12.5 45.3 0L192 301.3 297.4 406.6c12.5 12.5 32.8 12.5 45.3 0s12.5-32.8 0-45.3L237.3 256 342.6 150.6z"/></svg>
                  <p>Vacuum cleaning</p>   
                </div>

                <div className='flex items-center gap-2 ' >
                  <svg  className="w-5 bg-cyan-400 rounded-2xl p-1  " xmlns="http://www.w3.org/2000/svg" viewBox="0 0 448 512"><path d="M438.6 105.4c12.5 12.5 12.5 32.8 0 45.3l-256 256c-12.5 12.5-32.8 12.5-45.3 0l-128-128c-12.5-12.5-12.5-32.8 0-45.3s32.8-12.5 45.3 0L160 338.7 393.4 105.4c12.5-12.5 32.8-12.5 45.3 0z"/>
                  </svg> 
                  <p>Wet Cleaning</p>   
                </div>

                <div className='flex items-center gap-2 ' >
                <svg className="w-5 bg-gray-400 rounded-2xl p-1 " xmlns="http://www.w3.org/2000/svg" viewBox="0 0 384 512"><path d="M342.6 150.6c12.5-12.5 12.5-32.8 0-45.3s-32.8-12.5-45.3 0L192 210.7 86.6 105.4c-12.5-12.5-32.8-12.5-45.3 0s-12.5 32.8 0 45.3L146.7 256 41.4 361.4c-12.5 12.5-12.5 32.8 0 45.3s32.8 12.5 45.3 0L192 301.3 297.4 406.6c12.5 12.5 32.8 12.5 45.3 0s12.5-32.8 0-45.3L237.3 256 342.6 150.6z"/></svg> 
                  <p>Oil Changing</p>   
                </div>

                <div className='flex items-center gap-2 ' >
                  <svg  className="w-5 bg-cyan-400 rounded-2xl p-1  " xmlns="http://www.w3.org/2000/svg" viewBox="0 0 448 512"><path d="M438.6 105.4c12.5 12.5 12.5 32.8 0 45.3l-256 256c-12.5 12.5-32.8 12.5-45.3 0l-128-128c-12.5-12.5-12.5-32.8 0-45.3s32.8-12.5 45.3 0L160 338.7 393.4 105.4c12.5-12.5 32.8-12.5 45.3 0z"/>
                  </svg> 
                  <p>Brake Reparing</p>   
                </div>

                </div>
                <button className="bg-cyan-400 text-white hover:text-black w-36 m-auto p-1 rounded-xl font-bold my-2">Book Now</button>
                

          </div>

          <div className="COMPLEX CLEANING text-center service-icon bg-white p-2 md:p-5  flex flex-col gap-2 md:gap-5 rounded-xl shadow-md shadow-cyan-200">
                <p className='text-cyan-400 font-semibold'>COMPLEX CLEANING</p>
                <h1 className='text-3xl text-gray-500 font-[900]'>₹ 500</h1>
                <div className=" grid  grid-cols-2 p-5 gap-3 md:gap-4 mt-2 text-xs md:text-xs">
            
                

                <div className='flex items-center gap-2 '>
                <svg  className="w-5 bg-cyan-400 rounded-2xl p-1  " xmlns="http://www.w3.org/2000/svg" viewBox="0 0 448 512"><path d="M438.6 105.4c12.5 12.5 12.5 32.8 0 45.3l-256 256c-12.5 12.5-32.8 12.5-45.3 0l-128-128c-12.5-12.5-12.5-32.8 0-45.3s32.8-12.5 45.3 0L160 338.7 393.4 105.4c12.5-12.5 32.8-12.5 45.3 0z"/>
                  </svg>
                  <p >Seats washing</p>   
                </div>

                <div className='flex items-center gap-2 ' >
                  <svg  className="w-5 bg-cyan-400 rounded-2xl p-1  " xmlns="http://www.w3.org/2000/svg" viewBox="0 0 448 512"><path d="M438.6 105.4c12.5 12.5 12.5 32.8 0 45.3l-256 256c-12.5 12.5-32.8 12.5-45.3 0l-128-128c-12.5-12.5-12.5-32.8 0-45.3s32.8-12.5 45.3 0L160 338.7 393.4 105.4c12.5-12.5 32.8-12.5 45.3 0z"/>
                  </svg> 
                  <p>Exterior Washing</p>   
                </div>
                
                <div className='flex items-center  gap-2 ' >
                <svg  className="w-5 bg-cyan-400 rounded-2xl p-1  " xmlns="http://www.w3.org/2000/svg" viewBox="0 0 448 512"><path d="M438.6 105.4c12.5 12.5 12.5 32.8 0 45.3l-256 256c-12.5 12.5-32.8 12.5-45.3 0l-128-128c-12.5-12.5-12.5-32.8 0-45.3s32.8-12.5 45.3 0L160 338.7 393.4 105.4c12.5-12.5 32.8-12.5 45.3 0z"/>
                  </svg>
                  
                  <p>Interior cleaning</p>   
                </div>

                <div className='flex items-center gap-2 ' >
                  <svg  className="w-5 bg-cyan-400 rounded-2xl p-1  " xmlns="http://www.w3.org/2000/svg" viewBox="0 0 448 512"><path d="M438.6 105.4c12.5 12.5 12.5 32.8 0 45.3l-256 256c-12.5 12.5-32.8 12.5-45.3 0l-128-128c-12.5-12.5-12.5-32.8 0-45.3s32.8-12.5 45.3 0L160 338.7 393.4 105.4c12.5-12.5 32.8-12.5 45.3 0z"/>
                  </svg> 
                  <p>Window wiping</p>   
                </div>

                <div className='flex items-center gap-2 '>
                <svg  className="w-5 bg-cyan-400 rounded-2xl p-1  " xmlns="http://www.w3.org/2000/svg" viewBox="0 0 448 512"><path d="M438.6 105.4c12.5 12.5 12.5 32.8 0 45.3l-256 256c-12.5 12.5-32.8 12.5-45.3 0l-128-128c-12.5-12.5-12.5-32.8 0-45.3s32.8-12.5 45.3 0L160 338.7 393.4 105.4c12.5-12.5 32.8-12.5 45.3 0z"/>
                  </svg>
                  <p>Vacuum cleaning</p>   
                </div>

                <div className='flex items-center gap-2 ' >
                  <svg  className="w-5 bg-cyan-400 rounded-2xl p-1  " xmlns="http://www.w3.org/2000/svg" viewBox="0 0 448 512"><path d="M438.6 105.4c12.5 12.5 12.5 32.8 0 45.3l-256 256c-12.5 12.5-32.8 12.5-45.3 0l-128-128c-12.5-12.5-12.5-32.8 0-45.3s32.8-12.5 45.3 0L160 338.7 393.4 105.4c12.5-12.5 32.8-12.5 45.3 0z"/>
                  </svg> 
                  <p>Wet Cleaning</p>   
                </div>

                <div className='flex items-center gap-2 ' >
                <svg  className="w-5 bg-cyan-400 rounded-2xl p-1  " xmlns="http://www.w3.org/2000/svg" viewBox="0 0 448 512"><path d="M438.6 105.4c12.5 12.5 12.5 32.8 0 45.3l-256 256c-12.5 12.5-32.8 12.5-45.3 0l-128-128c-12.5-12.5-12.5-32.8 0-45.3s32.8-12.5 45.3 0L160 338.7 393.4 105.4c12.5-12.5 32.8-12.5 45.3 0z"/>
                  </svg>
                  <p>Oil Changing</p>   
                </div>

                <div className='flex items-center gap-2 ' >
                  <svg  className="w-5 bg-cyan-400 rounded-2xl p-1  " xmlns="http://www.w3.org/2000/svg" viewBox="0 0 448 512"><path d="M438.6 105.4c12.5 12.5 12.5 32.8 0 45.3l-256 256c-12.5 12.5-32.8 12.5-45.3 0l-128-128c-12.5-12.5-12.5-32.8 0-45.3s32.8-12.5 45.3 0L160 338.7 393.4 105.4c12.5-12.5 32.8-12.5 45.3 0z"/>
                  </svg> 
                  <p>Brake Reparing</p>   
                </div>

                </div>
                <button className="bg-cyan-400 text-white hover:text-black w-36 m-auto p-1 rounded-xl font-bold my-2">Book Now</button>
                

          </div>
     
      </div>

      

    </div>
  )
}

export default Washing_plan
