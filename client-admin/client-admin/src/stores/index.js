import {
  legacy_createStore as createStore,
  applyMiddleware,
  combineReducers,
  compose,
} from "redux";
// import rootReducer from "./reducers/rootReducer";
import thunk from "redux-thunk";
import categoriesReducer from "./reducers/categories";
import postsReducer from "./reducers/posts";
import tagsReducer from "./reducers/tags";
import postsIdReducer from "./reducers/postsid"
const reducer = combineReducers({
  categories: categoriesReducer,
  posts: postsReducer,
  tags: tagsReducer,
  postsId:postsIdReducer
});

const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose
const store = createStore(reducer,composeEnhancers(applyMiddleware(thunk)));

export default store;
