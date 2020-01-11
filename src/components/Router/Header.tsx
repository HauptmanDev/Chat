import React from "react";
import {NavLink} from "react-router-dom";
import {NEKO_PATH, PAGE_CHAT_PATH, PAGE_USERS_PATH, SIGN_IN_PATH, REGISTER_PATH} from "./Router";

const Header: React.FC = () => {

    return (
        <div
            style={{
                display: 'flex',
                flexFlow: 'row',
                // flexGrow: 1,
                alignItems: 'center',
                justifyContent: 'space-around',
                border: '1px black solid'
            }}
        >
            <NavLink to={SIGN_IN_PATH}>sign-in</NavLink>
            <NavLink to={REGISTER_PATH}>register</NavLink>
            <NavLink to={NEKO_PATH}>neko</NavLink>
            <NavLink to={PAGE_USERS_PATH}>Users</NavLink>
            <NavLink to={PAGE_CHAT_PATH}>Chat</NavLink>
        </div>
    );
};

export default Header;
