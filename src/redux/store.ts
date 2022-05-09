//imported reducers to combine
import userReducer from './reducers/userReducer'
import statusReducer from './reducers/statusReducer';

import { createStore, combineReducers, applyMiddleware, compose } from 'redux'
import thunk from 'redux-thunk'
const initialState = {};
const middleware = [thunk];

declare global {
    interface Window {
        __REDUX_DEVTOOLS_EXTENSION__?: typeof compose;
    }
}


const reducer = combineReducers({
    user: userReducer,
    status: statusReducer//user key ma store gareko
});
const store = createStore(reducer, initialState, compose(applyMiddleware(...middleware), (window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()) as any));
export default store;

// import { createStore, applyMiddleware } from "redux";
// import thunk from "redux-thunk";
// import thunkMiddleware from 'redux-thunk'
// import rootReducers from "./reducers/rootReducers";
// import {composeWithDevTools} from 'redux-devtools-extension'

// const composedEnhancer = composeWithDevTools(applyMiddleware(thunkMiddleware))

// const store = createStore(rootReducers, composedEnhancer);

// export default store;