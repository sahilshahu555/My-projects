  // https://fakestoreapi.com/products
import axios from"axios";
import {useEffect,useState,useContext,useReducer,useCallback,useMemo} from "react"
import {Cards} from "./Cards.jsx"
import {MyContext} from "../AllStateHooks/ContextApi/ContextApi.jsx"
import{initialState,DataReducer} from "../AllStateHooks/useReducer/Reducer.jsx"
import {useDispatch,useSelector} from "react-redux"
import {fetchData} from "../AllStateHooks/Redux/action.js"
import Login from "./Login.jsx";


export const Home=()=>{
  const [count,setCount]=useState(0)
  const [name,setName]=useState("Sahil")


  //? 1 useState 
  // const [state,setState]=useState()
  

  // ?2 useContextApi
  const {state, setState}=useContext(MyContext)

  //! Normal data fetching for useState and contextApi 
  
  useEffect(()=>{
    axios.get("https://dummyjson.com/products")
    .then((res)=>{setState(res.data.products)})
    .catch((err)=>{console.log(err)})
  },[])

 

  //? 3 useReducer
  // const [state ,dispatch] = useReducer(DataReducer,initialState);
  // useEffect(()=>{
  //   dispatch({type:"LOAD"});
  //   axios.get("https://dummyjson.com/products")
  //   .then((res)=>{dispatch({type:"SUCCESS",payload:res.data.products})})
  //   .catch(()=>{dispatch({type:"ERROR"});})
   
  //  },[])

  //? 4 REDUX data Fetching

  //  const {data}=useSelector((store)=>store)
  //  const dispatch = useDispatch();

  //  useEffect(()=>{

  //    dispatch(fetchData())
    
  //   },[])
// end of data fetching

// AddCount Function for Counter
const addCount=useCallback(()=>{
  setCount(count+1)
   console.log("addCount") 
  },[count])

// SubCount Function for Counter
const subCount=useCallback(()=>{
  if(count<=0){return ;}
  setCount(count-1)
  console.log("subCount")
},[count])

// Change Name Function
const changeName=()=>{
  if(name=="Sahil Shahu"){return }
  setName(name+" Shahu")
  console.log("Name")
}

// Login Component



console.log(state)
// console.log(data)
//  console.log("HOME");


  return( 
  <div>
    <h1>Home</h1>
  <Login/>

    {/* <div>
      <h1>{count%2==0?name:"Shahu"}</h1>
      <button onClick={changeName}>Change Name</button>
   </div>
    <div>
        <h1>{count}</h1>
        <button onClick={addCount}>Add</button>
        <button onClick={subCount}>Sub</button>
    </div> */}

    <div
    style={{display:"grid",gridTemplateColumns:"repeat(4,1fr)",margin:"50px"}}
    >   


       {/* this is for useState and ContextApi data */}
      {state?.map((elm,i)=>( <div key={i} > <Cards elm={elm}/> </div> ))}

       {/*  this is for useReducer data*/}
      {/* {state.data?.map((elm,i)=>( <div key={i} > <Cards elm={elm}/> </div> ))} */}


       {/*  this is for REDUX data*/}
      {/* {data.products?.map((elm,i)=>( <div key={i} > <Cards elm={elm}/> </div> ))} */}
      


     </div>
  </div>
  )
}
  