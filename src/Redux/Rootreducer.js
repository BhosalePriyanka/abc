import {combineReducers} from "redux";
import {addItem} from "./Reducer"


export const Rootreducers = combineReducers({reducer1 : addItem})