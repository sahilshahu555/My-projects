import {Routes,Route} from "react-router-dom"
import {Home} from "../Components/Home.jsx"
import {SingleCard} from "../Components/SingleCard.jsx"

export const Allroutes=()=>{

    return(
        <div>
           <Routes>
            <Route path="/" element={<Home/>} />
            <Route path ="/profile/:id" element={<SingleCard/>} />
           </Routes>
        </div>
    )
}