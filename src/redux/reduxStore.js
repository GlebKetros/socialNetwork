import { combineReducers, legacy_createStore } from "redux";
import messagesReducer from "./messagesReducer";
import profileReducer from "./profileReducer";

const reducers = combineReducers({
    messagesState: messagesReducer,
    profileState: profileReducer
})

let store = legacy_createStore(reducers)

export default store