import React from 'react';

interface IChat {
    messages: Array<any>,
    _id: string,
    user1Id: string,
    user2Id: string,
    created: string,
    updated: string,
    __v: number
}


interface IChatProps {
    chat: IChat
}

const Chat: React.FC<IChatProps> = ({chat}) => {

    return (
        <div
            style={{
                height: '50px',
                display: 'flex',
                alignItems: "center",
                width: '300px'
            }}
        >
            <span>{chat._id} </span>
        </div>
    );
};

export default Chat;
