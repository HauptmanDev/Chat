import {IUser} from "./usersInitialState";
import {PROFILE_SET_NAME} from "../../neko-6-neko/neko-2-bll/nekoActions";

export const SET_USERS = "CHATS/USERS/SET_USERS";
// export const LOGIN_ERROR = "REGISTER-LOGIN-RESPONSE/SING-IN/LOGIN_ERROR";
// export const LOGIN_IS_LOADING = "REGISTER-LOGIN-RESPONSE/SING-IN/LOGIN_IS_LOADING";

interface ISomeAction {
    type: string;
}

interface ISetUsers {
    type: typeof SET_USERS;
    users: Array<IUser>;
}

export const setUsers = (users: Array<IUser>) => ({type: SET_USERS, users});

export type IUsersActions = ISetUsers ;
