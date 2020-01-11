import {ThunkAction, ThunkDispatch} from "redux-thunk";
import {IUsersActions, setUsers} from "./usersActions";
import {IAppStore} from "../../store/store";
import {UsersAPI} from "../users-dal/UsersAPI";

type Return = void;
type ExtraArgument = {};
type IGetStore = () => IAppStore;


export const getUsers = (): ThunkAction<Return, IAppStore, ExtraArgument, IUsersActions> =>
    async (dispatch: ThunkDispatch<IAppStore, ExtraArgument, IUsersActions>, getStore: IGetStore) => {
        // dispatch(addBoolean({name: LOGIN_IS_LOADING, value: true}));
        try {
            const response = await UsersAPI.getUsers();
            console.log(response);
            dispatch(setUsers(response.data.users))
            // dispatch(addBoolean({name: LOGIN_IS_LOADING, value: false}));
            // if (response.data.error) {
            //     dispatch(addBoolean({name: LOGIN_ERROR, value: true, message: response.data.error}));
            // } else {
            //     dispatch(addBoolean({name: LOGIN_SUCCESS, value: true}));
            //     setCookie('token', response.data.token, 60 * 60 * 48); // age cookie - 2 days
            // }
        } catch (e) {
            // dispatch(addBoolean({name: LOGIN_IS_LOADING, value: false}));
            // dispatch(addBoolean({name: LOGIN_ERROR, value: true, message: e.message}))
        }
    }
;

