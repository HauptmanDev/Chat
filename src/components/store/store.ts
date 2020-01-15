import {applyMiddleware, combineReducers, createStore} from "redux";
import  thunkMiddleware from "redux-thunk"
import { signInReducer } from "../neko-2-sign-in/sign-in-2-bll/signInReducer";
import { registerReducer } from "../neko-3-register/register-2-bll/registerReducer";
import {nekoReducer} from "../neko-6-neko/neko-2-bll/nekoReducer";
import {booleanReducer} from "../neko-7-boolean/boolean-2-bll/booleanReducer";
import {chatsReducer} from "../neko-9-chats/neko-2-bll/chatsReducer";
import {usersReducer} from "../neko-8-users/users-bll/usersReducer";


const reducers = combineReducers({
    signIn: signInReducer,
    register: registerReducer,
    neko: nekoReducer,
    boolean: booleanReducer,
    chats: chatsReducer,
    users: usersReducer,
});

const store = createStore(reducers, applyMiddleware(thunkMiddleware));

export default store

export type IAppStore = ReturnType<typeof reducers>

// @ts-ignore
window.store = store;
