import {Routes,Route} from "react-router-dom"
import {Home} from "../Components/Home.jsx"
import {SingleCard} from "../Components/SingleCard.jsx"
import Login from  "../Components/Login.jsx"
import {Signup} from  "../Components/Signup.jsx"

  export const Allroutes=()=>{

    return(
        <div>
           <Routes>

            <Route path="/" element={<Home/>} />
            <Route path ="/profile/:id" element={<SingleCard/>} />
            <Route path="/login" element={<Login/>} />
            <Route path="/signup" element={<Signup/>} />
            
           </Routes>
        </div>
    )
}