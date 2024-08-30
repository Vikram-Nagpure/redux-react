import { Fetch_error, Fetch_request, Fetch_success } from "../actionType"

const initialstate={
    data:[],
    loading:false,
    error:false
}

export const reducer = (state=initialstate,action)=>{
    switch(action.type){
        case Fetch_request:
            return{loading:true,data:[],error:false}
        case Fetch_success:
            return{loading:false,data:action.payload,error:false}
        case Fetch_error:
            return{loading:false,data:[],error:true}    
        default:
            return state
    }
}