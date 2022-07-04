import { legacy_createStore, applyMiddleware } from "redux";
import { Reducer } from "./reducer";
import logger from "redux-logger";
import thunk from "redux-thunk";

//store
const myStore = legacy_createStore(Reducer, applyMiddleware(logger, thunk));

export default myStore;