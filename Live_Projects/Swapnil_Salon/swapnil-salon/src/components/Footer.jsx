

const Footer = () => {
  return (
    <div className="text-center p-5 bg-gray-900 font-sans">
      <h1 className="text-2xl  font-bold gradientText2">The SWAPNIL SALON</h1>
    
      <div className="flex flex-wrap md:flex-row justify-around items-center gap-10 p-5">
          <div className="text-start text-gray-700 hidden md:block gradientText1">
            <h1 className="text-center m-2">QUICK LINKS</h1>
            <p>About US</p>
            <p>Our Styles</p>
            <p>Our Contacts</p>
            <p>Login Page</p>

          </div>
          <div className="text-start text-gray-700 hidden md:block gradientText1">
            <h1 className="text-center m-2">OUR SERVICES</h1>
            <p>Hair Cutting</p>
            <p>Shaving & Design</p>
            <p>Hair Colors</p>
            <p>Body Massages</p>

          </div>
          <div className="text-start text-gray-700 gradientText1">
            <h1 className="text-center m-2">CONTACT US</h1>
            <p>Address : Khamla Square</p>
            <p>Mobile  : 1234567890</p>
            <p>Mon-Sat, 08am - 09 pm</p>
            <p>Email : support@gmail.com</p>

          </div>
          <p className="w-full gradientText1 text-sm ">All copy rights reserved by @ Swapnil Salon, 2024.</p>
      </div>
    </div>
  )
}

export default Footer
