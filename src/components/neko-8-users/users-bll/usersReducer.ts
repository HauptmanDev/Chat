import {usersInitialState} from "./usersInitialState";
import {IUsersActions} from "./usersActions";

export const usersReducer = (state = usersInitialState, action: IUsersActions) => {
    switch (action.type) {

        default: {
            return state;
        }
    }
};
