

const Footer = () => {
  return (
    <div className="text-center p-5 bg-gray-800 font-sans">
      <h1 className="text-2xl  font-bold gradientText2">The SWAPNIL SALON</h1>
    
      <div className="flex flex-wrap md:flex-row justify-around items-center gap-10 p-5">
          <div className="text-start text-white hidden md:block ">
            <h1 className="text-center m-2">QUICK LINKS</h1>
            <p>About US</p>
            <p>Our Styles</p>
            <p>Our Contacts</p>
            <p>Login Page</p>

          </div>
          <div className="text-start text-white hidden md:block ">
            <h1 className="text-center m-2">OUR SERVICES</h1>
            <p>Hair Cutting</p>
            <p>Shaving & Design</p>
            <p>Hair Colors</p>
            <p>Body Massages</p>

          </div>
          <div className="text-start text-white">
            <h1 className="text-center m-2">CONTACT US</h1>
            <p>Address : Khamla Square</p>
            <p>Mobile  : 9175334532</p>
            <p>Timings:- 09 am - 4.30 pm</p>
            

          </div>
          <p className="w-full text-white text-sm ">All copy rights reserved by @ Swapnil Salon, 2024. </p>
          <p className="text-white text-sm gradientText1 -my-5">This website is created by SAHIL SHAHU</p>
      </div>
    </div>
  )
}

export default Footer
