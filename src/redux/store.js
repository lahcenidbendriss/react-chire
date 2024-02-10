import { legacy_createStore as createStore } from "redux";
import { applyMiddleware } from "redux";
import {composeWithDevTools} from "redux-devtools-extension"
import { thunk } from "redux-thunk";
import { chairsReducer } from "./chairReducer";
export const store=createStore(chairsReducer,composeWithDevTools(applyMiddleware(thunk)))