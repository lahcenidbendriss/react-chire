import * as type from "./typeActionChair"
const initState={products:[],loading:false,erreur:""}
export function chairsReducer(state=initState,action){
    switch(action.type){
            case type.FETCH_CHAIR_REQUEST:
                return{...state,loading:true}
            case type.FETCH_CHAIR_SUCCESS:
                return{...state,products:action.payload,loading:false,erreur:""} 
            case type.FETCH_CHAIR_FAILURE:
                return{...state,erreur:action.payload,loading:false}  
            case type.DELETE_CHAIR_SUCCESS:
                return{...state,products:state.products.filter(p=>p.id!==action.payload)} 
            case type.DELETE_CHAIR_FAILURE:
                return{...state,erreur:action.payload,loading:false}  
            default:
                return state;   
        }
}