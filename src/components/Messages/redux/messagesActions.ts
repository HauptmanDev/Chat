

export const SEND_MESSAGE = 'messages/sendMessage'

export type MessagesActionsType =
    | sendMessageAction

export type sendMessageAction = {
    type: typeof SEND_MESSAGE,
    body: string
}