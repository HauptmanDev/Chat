import React, {useState} from 'react';
import {IUser} from '../users-bll/usersInitialState';
import {PAGE_CHAT_PATH} from "../../Router/Router";
import {Redirect} from "react-router";
import styles from './User.module.css'

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
            : < div className={styles.wrapper}>
                <img className={styles.avatar}
                    src="https://icons-for-free.com/iconfiles/png/512/jedi+master+starwars+yoda+icon-1320166700243190687.png"
                     alt="User Photo"/>
                <div className={styles.username}>
                    {/*{u._id}-*/}
                    {u.email}
                </div>
                <button className={styles.button} onClick={() => onSendMessage(u)}>messages</button>
            </div>
    )
};

export default User;
