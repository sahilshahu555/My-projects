import './App.css'
import AllRoutes from './Components/Utils/AllRoutes'
import Navbar from './Components/Utils/Navbar'

function App() {


  return (
    <div>
      <div className='flex justify-center items-center flex-col'>
        <Navbar/>
        <AllRoutes/>

        </div>
    </div>
  )
}

export default App
