  // https://fakestoreapi.com/products
import axios from"axios";
import {useEffect,useState} from "react"
import {Cards} from "./Cards.jsx"


export const Home=()=>{
  const [state,setState]=useState()

  useEffect(()=>{
    axios.get("https://dummyjson.com/products")
    .then((res)=>{setState(res.data.products)})
    .catch((err)=>{console.log(err)})
  },[])

// console.log(state)
  return( 
  <div>
    <h1>Home</h1>
    <div
    style={{display:"grid",gridTemplateColumns:"repeat(4,1fr)",margin:"50px"}}
    >
      {state?.map((elm,i)=>( 
         <div key={i} > <Cards elm={elm}/> </div>
      ))}

     </div>
  </div>
  )
}
  