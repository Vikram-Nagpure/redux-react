import { combineReducers, legacy_createStore } from "redux";
import { reducer as Counterreducer } from "./Counter/reducer";
import { reducer as Productreducer } from "./Products/reducer";

const rootreducer = combineReducers({Counterreducer,Productreducer})

export const store = legacy_createStore(rootreducer)