import {Routes,Route} from "react-router-dom"
import Home from "../Pages/Home"
import Login from "../Auth/Login"
import Signup from "../Auth/Signup"
import SingleCard from "../Pages/SingleCard"
import About from "../Pages/About"
import PrivateRoute from "./PrivateRoute"


const AllRoutes = () => {
  return (
    <Routes >
      <Route path="/" element={<Home/>} />
      <Route path="/about" element={<About/>} />
      <Route path="/singleCard/:id" element={<PrivateRoute><SingleCard/></PrivateRoute>} />
      <Route path="/login" element={<Login/>} />
      <Route path="/signup" element={<Signup/>} />
    </Routes>
  )
}

export default AllRoutes