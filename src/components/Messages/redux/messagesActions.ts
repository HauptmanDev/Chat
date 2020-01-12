import { IMessage } from "./messagesInitialState"


export const SEND_MESSAGE = 'messages/sendMessage'
export const DELETE_MESSAGE = 'messages/deleteMessage'

export type MessagesActionsType =
    | sendMessageAction
    | deleteMessageAction

export type sendMessageAction = {
    type: typeof SEND_MESSAGE
    newMessage: IMessage
}

export type deleteMessageAction = {
    type: typeof DELETE_MESSAGE
    id: string | number
}