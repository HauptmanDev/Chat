export interface IMessagesState {
   messages: Array<IMessage>
}

export interface IMessage {
    id: number | string
    body: string
    isOwn: boolean
}

export const messagesInitialState: IMessagesState = {
    messages: [
        {id: '1', body: 'Hello!', isOwn: true},
        {id: '2', body: 'hahahaha', isOwn: false},
        {id: '3', body:'hohohoh', isOwn: false},
        {id: '4', body:'Goodbye', isOwn: true},
        {id: '5', body:'Hi', isOwn: false},
        {id: '6', body:'How are you', isOwn: true},
        {id: '7', body:'Fine', isOwn: true},
        {id: '8', body:'Thank you', isOwn: false},
    ]
}