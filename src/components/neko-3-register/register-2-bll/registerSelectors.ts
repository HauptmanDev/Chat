
import {REGISTER_ERROR, REGISTER_IS_LOADING, REGISTER_SUCCESS} from "./registerActions";
import {IAppStore} from "../../store/store";


export const registerSuccess = (store: IAppStore) => store.boolean.booleans.filter(b => b.name === REGISTER_SUCCESS)[0].value;
export const registerLoading = (store: IAppStore) => store.boolean.booleans.filter(b => b.name === REGISTER_IS_LOADING)[0].value;
export const registerErrorMessage = (store: IAppStore) => store.boolean.booleans.filter(b => b.name === REGISTER_ERROR)[0].message;
