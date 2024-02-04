import Image from "next/image"

const About = () => {
  return (
    <div className="mt-20 flex flex-col justify-around items-center">
      <h1 className="text-2xl gradientText1 font-bold">ABOUT US</h1>
      <div className="flex flex-col md:flex-row justify-around items-center  w-full">
          <div className="w-full md:w-1/2 p-5 md:p-16  ">
            <Image src="https://t4.ftcdn.net/jpg/01/08/34/53/360_F_108345358_mREIebrNXJM0iuAlxvEshj1j2QrhhzpK.jpg" className="w-full h-52 rounded-xl" width={900} height={500} alt="photo"/>
          </div>
          <div className="flex flex-col justify-around items-center gap-4 md:gap-10">
            <h1 className="gradientText1 font-bold text-xl">OUR MISSION</h1>
            <p className=" font-medium text-md w-96 p-5 text-gray-500">To serve customers with integrity by being loyal to them, the company and ourselves. To give superior customer service consistently with happy relentless attitude while standing within affordable budget for families.</p>
          </div>
      </div>
    </div>
  )
}

export default About

