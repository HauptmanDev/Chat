import {ThunkAction, ThunkDispatch} from "redux-thunk";
import {IUsersActions} from "./usersActions";
import {IAppStore} from "../../store/store";

type Return = void;
type ExtraArgument = {};
type IGetStore = () => IAppStore;


export const getUsers = (email: string, password: string): ThunkAction<Return, IAppStore, ExtraArgument, IUsersActions> =>
    async (dispatch: ThunkDispatch<IAppStore, ExtraArgument, IUsersActions>, getStore: IGetStore) => {
        // dispatch(addBoolean({name: LOGIN_IS_LOADING, value: true}));
        try {
            // const response = await SignInAPI.login(email, passwordCoding(password), rememberMe);
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

