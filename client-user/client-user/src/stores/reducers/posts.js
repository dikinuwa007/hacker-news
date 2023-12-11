import { FETCH_POSTS_SUCCESS } from "../actions/actionTypes";

const initialState = {
  data: [],
};
function reducer(state = initialState, action) {
  if (action.type === FETCH_POSTS_SUCCESS)
    return { ...state, data: action.payload };
  return state;
}
export default reducer;
