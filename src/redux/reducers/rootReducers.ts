import { combineReducers } from "redux";
import auth from './authReducer';

const rootReducers = combineReducers({
    auth
});

export default rootReducers;

export type State = ReturnType<typeof rootReducers>