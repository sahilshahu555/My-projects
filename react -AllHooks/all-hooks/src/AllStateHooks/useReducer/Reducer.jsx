export const initialState={
    data:[],
    loading:false,
    err:false
}

export const DataReducer=(state,{type,payload})=>{
    switch (type){
        case "LOAD" :{ return{ ...state,loading:true}}
        case "SUCCESS" :{ return{ ...state,loading:false,err:false,data:payload}}
        case "ERROR" :{ return{ ...state,err:true,state:[]}}
        default: throw new Error ("Invalid Action Type,",type)

    }

}