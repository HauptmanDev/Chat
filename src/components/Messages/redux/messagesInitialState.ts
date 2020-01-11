export interface IMessagesState {
   messages: Array<IMessage>
}

export interface IMessage {
    body: string
}

export const messagesInitialState: IMessagesState = {
    messages: [
        {body: 'Hello!'},
        {body: 'hahahaha'},
        {body:'hohohoh'}
    ]
}