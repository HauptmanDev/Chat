import React from 'react'
import Message from './Message/Message'
import { useSelector } from 'react-redux'
import { IAppStore } from '../store/store'

const Messages: React.FC = () => {
    const messages = useSelector((state:IAppStore) => state.messages.messages)
    return (
        <div className={'messages'}>
            {messages.map(m => {
                return <Message body={m.body} />
            })}
        </div>
    )
}

export default Messages