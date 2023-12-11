import { FETCH_CATEGORIES_SUCCESS } from "../actions/actionTypes";

const initialState = {
  categories: [],
};

const rootReducer = (state = initialState, action) => {

switch (action.type){
    case FETCH_CATEGORIES_SUCCESS:
    return{...state,categories:action.payload}

}
};
