import {LOADDATA,GETDATA,ERRORDATA} from "./actionTypes.js"
import axios from "axios"
export const loadData=()=>{ return{type:LOADDATA} }

export const getData=(payload)=>{ return{type:GETDATA, payload:payload} }

export const errorData=()=>{  return{type:ERRORDATA} }


export const fetchData=()=>(dispatch)=>{

    axios.get("https://dummyjson.com/products")
    .then((res)=>{dispatch(getData(res.data))})
    .catch(()=>{dispatch(errorData())})
}
