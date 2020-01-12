import React from 'react'
import { useDispatch } from 'react-redux'
import { deleteMessageSuccess } from '../redux/messagesReducer'

interface IStateProps {
    id: string | number
    body: string
    isOwn: boolean
}

type MessagePropsType = IStateProps

const Message: React.FC<MessagePropsType> = ({ body, isOwn, id }) => {
    const dispatch = useDispatch()

    const onDeleteMessage = () => {
        dispatch(deleteMessageSuccess(id))
    }

    return (
        <div className={'messagesItem'} style={isOwn ? {textAlign: 'right'} : {textAlign: 'left'}}>
            <span>{body}</span>
            <button style={{marginLeft: '5px'}} onClick={onDeleteMessage}>X</button>
        </div>
    )
}

export default Message