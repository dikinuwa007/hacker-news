import { FETCH_CATEGORIES_REQUEST, FETCH_CATEGORIES_SUCCESS } from "../actions/actionTypes"

const initialState ={
    data:[],
    loading:false
}
function reducer(state = initialState,action){
if(action.type === FETCH_CATEGORIES_REQUEST)
    return {...state,loading:true}
if(action.type === FETCH_CATEGORIES_SUCCESS)
    return {...state,data:action.payload,loading:false}
return state
}
export default reducer