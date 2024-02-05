'use client';

import {createContext, useContext, useState} from "react"


const GlobalContext =createContext();

export const GlobalContextProvider=({children})=>{

    const[data,setData]=useState([]);
    const[user,setUser]=useState({ email:"", password:"",});
    const[auth,setAuth]=useState(false);
    const[status,setStatus]=useState();
    const [flag,setFlag]=useState(false);



    const obj={data,setData,user,setUser,flag,setFlag,auth,setAuth,status,setStatus}

return(
    <GlobalContext.Provider value={obj} >{children}</GlobalContext.Provider>
)

};

export const useGlobalContext=()=>{
    return useContext(GlobalContext);
}