export interface IMessagesState {
   messages: Array<IMessage>
}

export interface IMessage {
    id: string
    body: string
}

export const messagesInitialState: IMessagesState = {
    messages: [
        {id: '1', body: 'Hello!'},
        {id: '2', body: 'hahahaha'},
        {id: '3', body:'hohohoh'}
    ]
}