import React, {useEffect} from 'react';
import {IUser} from '../users-bll/usersInitialState';
import {PAGE_CHAT_PATH} from "../../Router/Router";
import {Redirect} from "react-router";

interface IUserProps {
    u: IUser
}

const messages = (u: IUser) => {
    return />
    // alert(u._id)
};

const User: React.FC<IUserProps> = ({u}) => {

    return (<div style={{margin: '20px', border: '1px solid black'}}>
            <div style={{margin: '20px', border: '1px solid black'}}>
                {u._id} - {u.email}
            </div>
            <button onClick={() => messages(u)}>messages</button>
        </div>
    )
};

export default User;
