import React, {useEffect, useState} from 'react';
import Chat from "./Chat";
import {Redirect} from 'react-router-dom';
import {SIGN_IN_PATH} from "../../Router/Router";
import {getCookie} from "../../neko-5-helpers/cookies/cookies";
import {useDispatch, useSelector} from "react-redux";
import {IAppStore} from "../../store/store";
import { getMe } from '../../neko-6-neko/neko-2-bll/nekoThunks';
import { getChats } from '../neko-2-bll/chatsThunks';

const ChatsContainer: React.FC = () => {

    const [redirect, setRedirect] = useState(false);
    const chatsArray = useSelector((state: IAppStore) => state.chats.privateChats);

    const dispatch = useDispatch();
    useEffect(() => {
        dispatch(getMe());
        dispatch(getChats())
    }, []);
    useEffect(() => {
        if (!getCookie('token')) setRedirect(true);
    }, []);


    if (redirect) {
        return <Redirect to={SIGN_IN_PATH}/>;
    }

    return (
        <div style={{display: "flex", width: '100vw'}}>
            <div style={{display: "flex", flexDirection: "column", width: '300px'}}>
                {chatsArray.map(chat => <Chat chat={chat}/>)}
            </div>
        </div>
    );
};

export default ChatsContainer;
