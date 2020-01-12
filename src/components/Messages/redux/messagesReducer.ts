import { MessagesActionsType, SEND_MESSAGE, sendMessageAction, DELETE_MESSAGE, deleteMessageAction } from './messagesActions';
import { messagesInitialState, IMessage } from './messagesInitialState'

export const messagesReducer = (state = messagesInitialState, action: MessagesActionsType) => {
    switch (action.type) {
        case SEND_MESSAGE:
            return { ...state, messages: [...state.messages, action.newMessage] }
        case DELETE_MESSAGE:
            return {
                ...state,
                messages: state.messages.filter(m => m.id !== action.id)
            }
        default: return state
    }
}

export const sendMessageSuccess = (newMessage: IMessage): sendMessageAction => ({ type: SEND_MESSAGE, newMessage })
export const deleteMessageSuccess = (id: string | number): deleteMessageAction => ({ type: DELETE_MESSAGE, id })
