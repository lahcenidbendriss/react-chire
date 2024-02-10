import axios from "axios"
import * as type from "./typeActionChair"
export function fetchchair(){
    return function(dispatch,getState){
        dispatch({type:type.FETCH_CHAIR_REQUEST})
        fetch("http://localhost:3500/products")
        .then(res=>res.json())
        .then(data=>dispatch({type:type.FETCH_CHAIR_SUCCESS,payload:data}))
        .catch(err=>dispatch({type:type.FETCH_CHAIR_FAILURE,payload:err.message}))
    }
}
export function deleteChair(id){
    return function(dispatch,getState){
        const chaire=getState().products.find(p=>p.id===id)
        if(chaire){
            axios.delete(`http://localhost:3500/products/${id}`)
            .then(res=>dispatch({type:type.DELETE_CHAIR_SUCCESS,payload:id}))
            .catch(err=>dispatch({type:type.DELETE_CHAIR_FAILURE,payload:err.message}))
        }
    }
}