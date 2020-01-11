import React from 'react'
import Message from './Message/Message'

const Messages: React.FC = () => {
    return (
        <div className={'messages'}>
            <Message body={'Hi'}/>
            <Message body={'Hello'}/>
        </div>
    )
}

export default Messages