import { DECREMENT, INCREMENT } from "../actionType"

export function Incrementdata(){
    return {type:INCREMENT,payload:1}
}

export function Decrementdata(){
    return {type:DECREMENT,payload:1}
}