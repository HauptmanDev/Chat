
import {LOGIN_ERROR, LOGIN_IS_LOADING, LOGIN_SUCCESS} from "./signInActions";
import { IAppStore } from "../../store/store";

export const signInSuccess = (store: IAppStore) => store.boolean.booleans.filter(b => b.name === LOGIN_SUCCESS)[0].value;
export const signInLoading = (store: IAppStore) => store.boolean.booleans.filter(b => b.name === LOGIN_IS_LOADING)[0].value;
export const signInErrorMessage = (store: IAppStore) => store.boolean.booleans.filter(b => b.name === LOGIN_ERROR)[0].message;
