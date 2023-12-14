import { ERRORDATA,GETDATA, LOADDATA } from "./actionTypes"


const initState={
    loading:"false",
    error:"false",
    data:[],
}

export const reducer =(state=initState,{type,payload})=>{
    switch(type){
       case LOADDATA:{return{...state,loading:true}}

       case GETDATA:{return{...state,loading:false,error:true,data:payload}}

       case ERRORDATA:{return{...state,error:true,data:[]}}

    }
    return state;
}