import React from 'react';
import {Route, Redirect} from "react-router-dom";
import Users from './../Users/Users';
import Chat from './../Chats/ChatPage';
import SignInPage from "../neko-2-sign-in/sign-in-1-ui/SignInPage";
import NekoPage from "../neko-6-neko/neko-1-ui/NekoPage";
import RegisterPage from "../neko-3-register/register-1-ui/RegisterPage";

export const START_GH_PAGES_PATH = '/chats';

export const PAGE_CHAT_PATH = START_GH_PAGES_PATH + '/chat';
export const PAGE_USERS_PATH = START_GH_PAGES_PATH + '/users';
export const SIGN_IN_PATH = START_GH_PAGES_PATH + '/sign-in';
export const REGISTER_PATH = START_GH_PAGES_PATH + '/register';
export const NEKO_PATH = START_GH_PAGES_PATH + '/neko';


const Routes: React.FC = () => {
    return (
        <div>
            <Route exact path={START_GH_PAGES_PATH} render={() => <Redirect to={SIGN_IN_PATH}/>}/>
            <Route path={SIGN_IN_PATH} render={() => <SignInPage/>}/>
            <Route path={REGISTER_PATH} render={() => <RegisterPage/>}/>
            <Route path={NEKO_PATH} render={() => <NekoPage/>}/>
            <Route path={PAGE_USERS_PATH} render={() => <Users/>}/>
            <Route path={PAGE_CHAT_PATH} render={() => <Chat/>}/>
        </div>
    );
};

export default Routes;
