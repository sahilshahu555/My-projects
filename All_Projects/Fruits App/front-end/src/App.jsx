import './App.css'
import AllRoutes from './Components/Utils/AllRoutes'
import Navbar from './Components/Utils/Navbar'

function App() {


  return (
    <div className="">
      <div className=''>
      <div className="relative mb-20">
        <div className=" fixed top-0 left-0 right-0 ">
        <Navbar/>
        </div>
        </div>
        <h1 className="text-center text-gray-500 font-bold text-xl bg-white w-60 m-auto py-1 px-2 rounded-tr-xl rounded-bl-xl my-10"
        > Mansuri Fresh Fruits</h1>
      
        <AllRoutes/>

        </div>
    </div>
  )
}

export default App
