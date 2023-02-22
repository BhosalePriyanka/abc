import { createStore } from "redux"
import { Rootreducers } from "./Rootreducer"

export const Store = createStore(Rootreducers, window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__())