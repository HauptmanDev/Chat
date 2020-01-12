import React, { useRef, useEffect, useLayoutEffect } from 'react'
import Message from './Message/Message'
import { useSelector, useDispatch } from 'react-redux'
import { IAppStore } from '../store/store'
import { sendMessageSuccess } from './redux/messagesReducer'
import { IMessage } from './redux/messagesInitialState'

const Messages: React.FC = () => {
    const messages: Array<IMessage> = useSelector((state: IAppStore) => state.messages.messages)
    const dispatch = useDispatch()

    const messagesEndRef = useRef<HTMLDivElement>(null)

    const scrollToBottom = () => {
        if(messagesEndRef.current) {
            messagesEndRef.current.scrollIntoView({ behavior: "smooth" })
        }
      }

    // useEffect(scrollToBottom, [messages]);

    const onSendMessage = () => {
        dispatch(sendMessageSuccess('it-kamasutra'))
        scrollToBottom()
    }

    return (
        <div className={'messagesBlock'}>
            <div className={'messages'} style={{ height: '200px', overflowY: 'scroll' }}>{messages.map(m =>
                <Message key={m.id} body={m.body} />)}
                <div ref={messagesEndRef}></div>
            </div>
            <button onClick={onSendMessage}>Send</button>
        </div>
    )
}

export default Messages