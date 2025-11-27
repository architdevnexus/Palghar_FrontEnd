import axios from 'axios';

const base_Url = "www.palghar.com";

export const instance = axios.create({
    baseURL: base_Url,
    headers: {
        "Content-Type": "appication/json"
    }
})