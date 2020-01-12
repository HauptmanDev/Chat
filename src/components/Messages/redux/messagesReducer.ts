import { MessagesActionsType, SEND_MESSAGE, sendMessageAction } from './messagesActions';
import { messagesInitialState } from './messagesInitialState'

export const messagesReducer = (state = messagesInitialState, action: MessagesActionsType) => {
    switch (action.type) {
        case SEND_MESSAGE:
            return { ...state, messages: [ ...state.messages, {id: '4', body: action.body}]  }
        default: return state
    }
}

export const sendMessageSuccess = (body: string): sendMessageAction => ({ type: SEND_MESSAGE, body })
