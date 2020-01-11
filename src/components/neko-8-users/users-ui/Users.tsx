import React from 'react';
import {IAppStore} from "../../store/store";
import {useSelector} from "react-redux";


const UsersPage: React.FC = () => {

    const usersArray = useSelector((store: IAppStore) => store.users.users);

    const users = usersArray.map(u => <div
        style={{margin: '20px', border: '1px solid black'}}
    >{u._id} - {u.email}</div>);

    return (
        <div>
            {users}
        </div>
    )
};

export default UsersPage;
