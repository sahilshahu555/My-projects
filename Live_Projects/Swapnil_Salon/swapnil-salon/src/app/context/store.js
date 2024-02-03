'use client';

import {createContext, useContext, useState} from "react"


const GlobalContext =createContext();

export const GlobalContextProvider=({children})=>{

    const[data,setData]=useState([]);
    const[user,setUser]=useState("");
    const[flage,setFlage]=useState(false);


    const obj={data,setData,user,setUser,flage,setFlage}

return(
    <GlobalContext.Provider value={obj} >{children}</GlobalContext.Provider>
)

};

export const useGlobalContext=()=>{
    return useContext(GlobalContext);
}