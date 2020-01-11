import React from 'react';
import {Route, Redirect} from "react-router-dom";
import Users from './../Users/Users';
import Chat from './../Chats/ChatPage';


export const PAGE_CHAT_PATH = '/chat';
export const PAGE_USERS_PATH = '/users';


const Routes: React.FC = () => {
    return (
        <div >
            <Route exact path='/' render={() => <Redirect to={PAGE_USERS_PATH}/>}/>
            <Route path={PAGE_USERS_PATH} render={() => <Users/>}/>
            <Route path={PAGE_CHAT_PATH} render={() => <Chat/>}/>
        </div>
    );
};

export default Routes;