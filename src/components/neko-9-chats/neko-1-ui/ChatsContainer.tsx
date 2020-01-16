import React, {useEffect, useState} from 'react';
import Chat from "./Chat";
import {Redirect} from 'react-router-dom';
import {SIGN_IN_PATH} from "../../Router/Router";
import {getCookie} from "../../neko-5-helpers/cookies/cookies";
import {useDispatch, useSelector} from "react-redux";
import {IAppStore} from "../../store/store";
import {getMe} from '../../neko-6-neko/neko-2-bll/nekoThunks';
import {getChats} from '../neko-2-bll/chatsThunks';

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
        <div>
            <div
                style={{display: "flex", width: '100vw', height: '5vh', backgroundColor: 'blue', alignItems: 'center'}}>
                <input type="text" placeholder='Search' style={{width: '130px', height: '20px'}}/>
            </div>
            <div style={{display: 'flex', flexDirection: 'row', height: '86.5vh'}}>
                <div style={{display: "flex", width: '20vw', border: '1px solid black', height: '86.5vh'}}>
                    <div style={{display: "flex", flexDirection: "column", width: '300px'}}>
                        {chatsArray.map(chat => <Chat chat={chat}/>)}
                    </div>
                </div>
                <div style={{
                    display: "flex",
                    width: '100vw',
                    height: '86.5vh',
                    alignItems: 'flex-end',
                    justifyContent: 'center'
                }}>
                    <div style={{display: "flex", flexDirection: "column", width: '80vw',}}>
                        <button style={{width: '120px', height: '20px', backgroundColor: 'lightblue'}}>Send message</button>
                    </div>
                </div>
            </div>
            <div style={{display: "flex", width: '100vw', height: '5vh', backgroundColor: 'red'}}>
                Все права защищены)
            </div>
        </div>
    );
};

export default ChatsContainer;
