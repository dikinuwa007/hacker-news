import { FETCH_TAGS_SUCCESS } from "../actions/actionTypes"

const initialState ={
    data:[]
}
function reducer(state = initialState,action){
if(action.type === FETCH_TAGS_SUCCESS)
    return {...state,data:action.payload}
return state
}
export default reducer