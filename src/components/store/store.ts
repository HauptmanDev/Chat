import { messagesReducer } from './../Messages/redux/messagesReducer';
import {applyMiddleware, combineReducers, createStore} from "redux";
import  thunkMiddleware from "redux-thunk"

const reducers = combineReducers({
    messages: messagesReducer
});

const store = createStore(reducers, applyMiddleware(thunkMiddleware));

export default store

export type IAppStore = ReturnType<typeof reducers>

// @ts-ignore
window.store = store;
