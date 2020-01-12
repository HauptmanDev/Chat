import React, {useEffect, useState} from 'react';
import {IUser} from '../users-bll/usersInitialState';
import {PAGE_CHAT_PATH} from "../../Router/Router";
import {Redirect} from "react-router";

interface IUserProps {
    u: IUser
}

const User: React.FC<IUserProps> = ({u}) => {

    const [isRedirect, changeRedirect] = useState(false);

    const onSendMessage = (u: IUser) => {
        changeRedirect(true)
    };

    return (
        isRedirect ? <Redirect to={PAGE_CHAT_PATH + '/messages' + `?_id=${u._id}`}/>
            : < div style={{margin: '20px', border: '1px solid black'}}>
                <div style={{margin: '20px', border: '1px solid black'}}>
                    {u._id}-{u.email}
                </div>
                <button onClick={() => onSendMessage(u)}>messages</button>
            </div>
    )
};

export default User;
