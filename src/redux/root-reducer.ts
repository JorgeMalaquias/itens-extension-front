import { combineReducers } from "redux";
import itemReducer from "./item/slice";

const rootReducer = combineReducers({ itemReducer });

export default rootReducer;