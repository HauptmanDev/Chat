import React from 'react'

interface IStateProps {
    body: string
    isOwn: boolean
}

type MessagePropsType = IStateProps

const Message: React.FC<MessagePropsType> = ({ body, isOwn }) => {
    return (
        <div className={'messagesItem'} style={isOwn ? {textAlign: 'right'} : {textAlign: 'left'}}>
            <span>{body}</span>
        </div>
    )
}

export default Message