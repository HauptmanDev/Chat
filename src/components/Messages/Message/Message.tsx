import React from 'react'

interface IStateProps {
    body: string
}

type MessagePropsType = IStateProps

const Message: React.FC<MessagePropsType> = ({ body }) => {
    return (
        <div className={'messagesItem'}>
            <span>{body}</span>
        </div>
    )
}

export default Message