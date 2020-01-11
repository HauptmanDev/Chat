import {ThunkAction, ThunkDispatch} from "redux-thunk";
import {IBooleanActions} from "./booleanActions";
import { IAppStore } from "../../store/store";

type Return = void;
type ExtraArgument = {};
type IGetStore = () => IAppStore;

export const getMeExample = (): ThunkAction<Return, IAppStore, ExtraArgument, IBooleanActions> =>
    async (dispatch: ThunkDispatch<IAppStore, ExtraArgument, IBooleanActions>, getStore: IGetStore) => {

    };
