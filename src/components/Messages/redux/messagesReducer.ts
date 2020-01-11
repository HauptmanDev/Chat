import { MessagesActionsType } from './messagesActions';
import { messagesInitialState } from './messagesInitialState'

export const messagesReducer = (state = messagesInitialState, action: MessagesActionsType) => {
    switch (action.type) {

        default: return state
    }
}

// export const deleteProductSuccess = (id: string): deleteProductAction => ({ type: DELETE_PRODUCT, id })
