import React, {useEffect} from 'react';
import {IAppStore} from "../../store/store";
import {useDispatch, useSelector} from "react-redux";
import {getUsers} from "../users-bll/usersThunks";


const UsersPage: React.FC = () => {
    const dispatch = useDispatch();
    useEffect(() => {
        dispatch(getUsers())
    }, []);
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
