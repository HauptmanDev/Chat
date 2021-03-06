import {LOGIN_ERROR, LOGIN_IS_LOADING, LOGIN_SUCCESS} from "../../neko-2-sign-in/sign-in-2-bll/signInActions";
import {
    REGISTER_ERROR,
    REGISTER_IS_LOADING,
    REGISTER_SUCCESS
} from "../../neko-3-register/register-2-bll/registerActions";
import {PROFILE_ERROR, PROFILE_LOADING} from "../../neko-6-neko/neko-2-bll/nekoActions";

export interface IBooleanObject {
    name: string;
    value: boolean;
    message?: string;
}

export interface IBooleanState {
    booleans: IBooleanObject[];
}

export const booleanInitialState: IBooleanState = {
    booleans: [
        {
            name: LOGIN_IS_LOADING,
            value: false,
        },
        {
            name: LOGIN_ERROR,
            value: false,
            message: ''
        },
        {
            name: LOGIN_SUCCESS,
            value: false,
            message: ''
        },
        {
            name: REGISTER_IS_LOADING,
            value: false,
        },
        {
            name: REGISTER_ERROR,
            value: false,
            message: ''
        },
        {
            name: REGISTER_SUCCESS,
            value: false,
            message: ''
        },
        {
            name: PROFILE_LOADING,
            value: false,
        },
        {
            name: PROFILE_ERROR,
            value: false,
            message: ''
        },
        // {
        //     name: PROFILE_SUCCESS,
        //     value: false,
        //     message: ''
        // },
    ],
};
