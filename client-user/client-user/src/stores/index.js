import {legacy_createStore as createStore,applyMiddleware,combineReducers,compose} from 'redux'
import thunk from "redux-thunk"
import postsReducer from "./reducers/posts"
import postsIdReducer from './reducers/postsid'

const reducer = combineReducers({
posts:postsReducer,
postsIdReducer:postsIdReducer
})
const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose
const store = createStore(reducer,composeEnhancers(applyMiddleware(thunk)));

export default store