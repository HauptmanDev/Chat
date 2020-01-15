import {ThunkAction, ThunkDispatch} from "redux-thunk";
import {IChatsActions, nameChatUses} from "./chatsActions";
import {ISignInActions, LOGIN_SUCCESS} from "../../neko-2-sign-in/sign-in-2-bll/signInActions";
// import {addBoolean} from "../../neko-7-boolean/boolean-2-bll/booleanActions";
import {getCookie, setCookie} from "../../neko-5-helpers/cookies/cookies";
import {IAppStore} from "../../store/store";
// import {PROFILE_LOADING, PROFILE_ERROR} from "../../neko-6-neko/neko-2-bll/nekoActions";
import { usersChatDataAPI } from "../neko-3-dal/ChatsAPI";

type Return = void;
type ExtraArgument = {};
type IGetStore = () => IAppStore;

export const getChats = (): ThunkAction<Return, IAppStore, ExtraArgument, IChatsActions> =>
    async (dispatch: ThunkDispatch<IAppStore, ExtraArgument, IChatsActions | ISignInActions>, getStore: IGetStore) => {

        // dispatch(addBoolean({name: PROFILE_LOADING, value: true}));
        const token = getCookie('token') || '';
            const data = await usersChatDataAPI.getChats(token);
            if (data.error) {

                // setCookie('token', '', -1000); // почему отрицательный?, а не скажем 0.
            } else {
                // setCookie('token', data.token, 60 * 60 * 48); //cookie age is 2 days
                dispatch(nameChatUses(data.privateChats));
                console.log(data.privateChats)
            }
    };
