  // https://fakestoreapi.com/products
import axios from"axios";
import {useEffect,useState,useContext,useReducer} from "react"
import {Cards} from "./Cards.jsx"
import {MyContext} from "../AllStateHooks/ContextApi/ContextApi.jsx"
import{initialState,DataReducer} from "../AllStateHooks/useReducer/Reducer.jsx"
import {useDispatch,useSelector} from "react-redux"
import {fetchData} from "../AllStateHooks/Redux/action.js"


export const Home=()=>{
  //? 1 useState 
  // const [state,setState]=useState()

  // ?2 useContextApi
  // const {state, setState}=useContext(MyContext)

  //! Normal data fetching for useState and contextApi 
  
  // useEffect(()=>{
  //   axios.get("https://dummyjson.com/products")
  //   .then((res)=>{setState(res.data.products)})
  //   .catch((err)=>{console.log(err)})
  // },[])

  //? 3 useReducer
  // const [state ,dispatch] = useReducer(DataReducer,initialState);
  // useEffect(()=>{
  //   dispatch({type:"LOAD"});
  //   axios.get("https://dummyjson.com/products")
  //   .then((res)=>{dispatch({type:"SUCCESS",payload:res.data.products})})
  //   .catch(()=>{dispatch({type:"ERROR"});})
   
  // },[])

  //? 3 REDUX data Fetching

   const {data}=useSelector((store)=>store)
   const dispatch = useDispatch();

   useEffect(()=>{
     dispatch(fetchData())
    },[])




  

// console.log(state)
console.log(data)

  return( 
  <div>
    <h1>Home</h1>
    <div
    style={{display:"grid",gridTemplateColumns:"repeat(4,1fr)",margin:"50px"}}
    >   


       {/* this is for useState and ContextApi data */}
      {/* {state?.map((elm,i)=>( <div key={i} > <Cards elm={elm}/> </div> ))} */}

       {/*  this is for useReducer data*/}
      {/* {state.data?.map((elm,i)=>( <div key={i} > <Cards elm={elm}/> </div> ))} */}


       {/*  this is for useReducer data*/}
      {data.products?.map((elm,i)=>( <div key={i} > <Cards elm={elm}/> </div> ))}

     </div>
  </div>
  )
}
  