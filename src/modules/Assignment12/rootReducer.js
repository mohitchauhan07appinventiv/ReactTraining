import apiReducer from "./components/reducers";
import { combineReducers } from "redux";

const rootReducer = combineReducers({ apiReducer });

export default rootReducer;