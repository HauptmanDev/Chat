export interface IUser {
    _id: string
    email: string
}

export interface IUsersState {
    users: Array<IUser>
}


export const usersInitialState: IUsersState = {
    users: [
        {_id: "5e1877813d4ae60004579153", email: "test@email.nya"},
        {_id: "5e1877813d4ae60004579153", email: "test@email.nya"},
    ]
};
