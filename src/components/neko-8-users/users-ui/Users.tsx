import React, {useEffect} from 'react';
import {IAppStore} from "../../store/store";
import {useDispatch, useSelector} from "react-redux";
import {getUsers} from "../users-bll/usersThunks";
import User from './User';


const UsersPage: React.FC = () => {
    const dispatch = useDispatch();
    useEffect(() => {
        dispatch(getUsers())
    }, []);
    const usersArray = useSelector((store: IAppStore) => store.users.users);

    const users = usersArray.map((u, index) => <User u={u} key={index}/>);

    return (
        <div>
            {users}
        </div>
    )
};

export default UsersPage;
