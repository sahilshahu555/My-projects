
import { useState } from "react";
import {Navigate} from "react-router-dom"

const PrivateRoute = ({children}) => {
const [Auth,setAuth]=useState(false)
 

    if(!Auth)
    { return <Navigate to="/login"/> }

  return children;
}

export default PrivateRoute
