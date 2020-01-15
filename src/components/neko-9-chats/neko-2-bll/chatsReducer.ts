import {chatsInitialState} from "./chatsInitialState";
import {IChatsActions, SET_PRIVATE_CHATS} from "./chatsActions";

export const chatsReducer = (state = chatsInitialState, action: IChatsActions) => {
    switch (action.type) {
        case SET_PRIVATE_CHATS:
            return {
                ...state,
                privateChats: action.privateChats
            };

        default: {
            return state;
        }
    }
};
