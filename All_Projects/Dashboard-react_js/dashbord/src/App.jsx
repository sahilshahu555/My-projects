
import { AllRoutes } from './components/Routes/Allroutes'
import Navbar from './components/Navbar/Navbar'
import Sidebar from './pages/Sidebar/Sidebar'
import Footer from './components/Footer/Footer'
import "./styles/global.scss"
const App = () => {
  return (
    <div className='main' >
      <Navbar/>
        <div className='container'>
            <div className='menuContainer'><Sidebar/></div>
            <div className='contentContainer'><AllRoutes/></div>  
        </div>
      <Footer/>
    </div>
  )
}

export default App