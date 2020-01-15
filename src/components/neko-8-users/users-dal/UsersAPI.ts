import axios from 'axios';
import {baseURL} from "../../base-url";

const instance = axios.create({
    baseURL
});

export const UsersAPI = {
    getUsers() {
        return instance.get(`users/`)
    }
};
