import axios from 'axios';
import {baseURL} from "../../base-url";

const instance = axios.create({
    baseURL
});

export interface IGetMeData {
    privateChats: Array<any>;
    token: string;
    error: string;
}

export const usersChatDataAPI = {
    getChats: async (token: string) => {
        const response = await instance.get<IGetMeData>(`/private-chats?_token=${token}`, );
        return response.data;
    },
};
