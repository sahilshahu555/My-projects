"use client"

const Service_home = () => {

  const data=[
    {
      icon:"flaticon-car-wash",
      title:"Paint Restoration",
      description:"It removes marring, scratches, protective, marks, high-performance polymer sealant.",
    },
    {
      icon:"flaticon-car-service",
      title:"Car Wrapping",
      description:"A car wrap consists of several huge vinyl decals that are applied to every panel of your car",
    },
    {
      icon:"flaticon-car-wash-1",
      title:"Ceramic coating",
      description:"Ceramic coating is a process that coats a car's surface with a solid ceramic material.",
    },
    {
      icon:"flaticon-car-wash",
      title:"Paint Protection Film",
      description:"It is a Protection film that offers protection against scratches and chips. ",
    },
    {
      icon:"flaticon-car-service",
      title:"Headlight Cleaning",
      description:"Let us give a chance to restore your car's headlights before you attempt costly replacement.",
    },
    {
      icon:"flaticon-brush-1",
      title:"wheel Cleaning",
      description:"The best wheel cleaner can easily remove brake dust and road grime, leaving clean wheels that sparkle like new.",
    },
    {
      icon:"flaticon-car-wash-1",
      title:"Exterior Washing",
      description:"A car wash is a facility used to clean the exterior, and in some cases the interior of cars.",
    },
    {
      icon:"flaticon-car-wash",
      title:"Interior Washing",
      description:"It involves a thorough cleaning of your car's interior to ensure a pristine and good environment.",
    },
    {
      icon:"flaticon-vacuum-cleaner",
      title:"Vacuum Cleaning",
      description:"Eliminate dirt and debris from vehicle interiors, enhancing cleanliness and comfort for customers. ",
    },
    {
      icon:"flaticon-seat",
      title:"Seats Washing",
      description:"Offer professional car seat cleaning services using specialized equipment to clean like new condition.",
    },
    {
      icon:"flaticon-car-service",
      title:"Window Cleaning",
      description:"Window cleaners usually contain surfactants that adhere to the glass surface and lift away dirt.",
    },
    {
      icon:"flaticon-car-service-2",
      title:"Wet Cleaning",
      description:"Deliver meticulous wet cleaning services for cars, ensuring a spotless and refreshed interior appearance.",
    },
    

  ]

  return (
    <div className="m-2 md:m-10 mt-10  text-center  " id='SERVICE'>
      <p className='text-cyan-400 text-xl font-bold underline decoration-2 underline-offset-4 '>WHAT WE DO?</p>
      <h1 className='text-[1.9rem] md:text-[3.5rem] font-[800] leading-normal m-8 md:m-10 text-gray-500 '>Premium Washing Services</h1>
      <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 mt-10 md:mt-14 m-4 gap-6 md:gap-10
                
      ">
      {data?.map((elm)=>(
          <div className="text-center service-icon bg-white p-4 md:p-5  flex flex-col gap-2 md:gap-5 rounded-lg shadow-md shadow-cyan-200">
              <i className={elm.icon}></i>
              <h3 className="  md:text-xl font-semibold text-cyan-400">{elm.title}</h3>
              <p className="md:px-5 text-xs text-gray-500 md:text-sm">{elm.description}</p>
          </div>
      ))}
      </div>

      <div className='bg-white text-gray-500 h-56 w-full rounded-xl mt-10 grid grid-cols-2 md:grid-cols-4   gap-3 md:gap-5 p-3 md:p-10  shadow-md shadow-cyan-200'>

        <div className="flex justify-center items-center gap-3 rounded-xl bg-cyan-400 p-2">
          <div className="w-6 md:w-10 ">
              <svg  xmlns="http://www.w3.org/2000/svg" viewBox="0 0 384 512"><path d="M215.7 499.2C267 435 384 279.4 384 192C384 86 298 0 192 0S0 86 0 192c0 87.4 117 243 168.3 307.2c12.3 15.3 35.1 15.3 47.4 0zM192 128a64 64 0 1 1 0 128 64 64 0 1 1 0-128z"/>
              </svg>
          </div>
          <div className="">
            <h1 className=" text-lg md:text-3xl font-bold"> 01</h1>
            <p className="text-sm md:text-lg font-semibold">Service Points</p>
          </div>
        </div>
        
        <div className="flex justify-center items-center gap-3 rounded-xl bg-cyan-400 p-2">
          <div className="w-8 md:w-14 ">
          <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 640 512"><path d="M144 0a80 80 0 1 1 0 160A80 80 0 1 1 144 0zM512 0a80 80 0 1 1 0 160A80 80 0 1 1 512 0zM0 298.7C0 239.8 47.8 192 106.7 192h42.7c15.9 0 31 3.5 44.6 9.7c-1.3 7.2-1.9 14.7-1.9 22.3c0 38.2 16.8 72.5 43.3 96c-.2 0-.4 0-.7 0H21.3C9.6 320 0 310.4 0 298.7zM405.3 320c-.2 0-.4 0-.7 0c26.6-23.5 43.3-57.8 43.3-96c0-7.6-.7-15-1.9-22.3c13.6-6.3 28.7-9.7 44.6-9.7h42.7C592.2 192 640 239.8 640 298.7c0 11.8-9.6 21.3-21.3 21.3H405.3zM224 224a96 96 0 1 1 192 0 96 96 0 1 1 -192 0zM128 485.3C128 411.7 187.7 352 261.3 352H378.7C452.3 352 512 411.7 512 485.3c0 14.7-11.9 26.7-26.7 26.7H154.7c-14.7 0-26.7-11.9-26.7-26.7z"/></svg>
          </div>
          <div className="">
            <h1 className="text-lg md:text-3xl font-bold"> 05</h1>
            <p className=" text-sm md:text-lg font-semibold">Team Members</p>
          </div>
        </div>

        <div className="flex justify-center items-center gap-3 rounded-xl bg-cyan-400 p-2">
          <div className="w-8 md:w-14 ">
          <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 640 512"><path d="M96 0C43 0 0 43 0 96V416c0 53 43 96 96 96H544c53 0 96-43 96-96V96c0-53-43-96-96-96H96zM64 96c0-17.7 14.3-32 32-32H544c17.7 0 32 14.3 32 32V416c0 17.7-14.3 32-32 32H96c-17.7 0-32-14.3-32-32V96zm159.8 80a48 48 0 1 0 -96 0 48 48 0 1 0 96 0zM96 309.3c0 14.7 11.9 26.7 26.7 26.7h56.1c8-34.1 32.8-61.7 65.2-73.6c-7.5-4.1-16.2-6.4-25.3-6.4H149.3C119.9 256 96 279.9 96 309.3zM461.2 336h56.1c14.7 0 26.7-11.9 26.7-26.7c0-29.5-23.9-53.3-53.3-53.3H421.3c-9.2 0-17.8 2.3-25.3 6.4c32.4 11.9 57.2 39.5 65.2 73.6zM372 289c-3.9-.7-7.9-1-12-1H280c-4.1 0-8.1 .3-12 1c-26 4.4-47.3 22.7-55.9 47c-2.7 7.5-4.1 15.6-4.1 24c0 13.3 10.7 24 24 24H408c13.3 0 24-10.7 24-24c0-8.4-1.4-16.5-4.1-24c-8.6-24.3-29.9-42.6-55.9-47zM512 176a48 48 0 1 0 -96 0 48 48 0 1 0 96 0zM320 256a64 64 0 1 0 0-128 64 64 0 1 0 0 128z"/></svg>
          </div>
          <div className="">
            <h1 className="text-lg md:text-3xl font-bold">100+</h1>
            <p className="text-sm md:text-lg font-semibold">Happy Clients</p>
          </div>
        </div>

        <div className="flex justify-center items-center gap-3 rounded-xl bg-cyan-400 p-2">
          <div className="w-6 md:w-10 ">
          <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 448 512"><path d="M64 32C28.7 32 0 60.7 0 96V416c0 35.3 28.7 64 64 64H384c35.3 0 64-28.7 64-64V96c0-35.3-28.7-64-64-64H64zM337 209L209 337c-9.4 9.4-24.6 9.4-33.9 0l-64-64c-9.4-9.4-9.4-24.6 0-33.9s24.6-9.4 33.9 0l47 47L303 175c9.4-9.4 24.6-9.4 33.9 0s9.4 24.6 0 33.9z"/></svg>
          </div>
          <div className="">
            <h1 className="text-lg md:text-3xl font-bold">100+</h1>
            <p className=" text-sm md:text-lg font-semibold">Projects Done</p>
          </div>
        </div>
        
       

      </div>

    </div>
  )
}

export default Service_home
