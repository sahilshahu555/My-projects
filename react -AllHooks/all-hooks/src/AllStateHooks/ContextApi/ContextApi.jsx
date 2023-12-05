import {createContext,useState} from "react";

export const MyContext=createContext();

export const ContextProvider = ({children})=>{


    const [state,setState]=useState([])

  return <MyContext.Provider value={{state,setState}}>{children}</MyContext.Provider>

}
