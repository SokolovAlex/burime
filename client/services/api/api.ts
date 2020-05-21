import axios from 'axios'
import { baseServerUrl } from '../../config';

const api = axios.create({
    baseURL: baseServerUrl,
    withCredentials: true,
    headers: {
        'Content-Type': 'application/json',
    },
    validateStatus: status => status >= 200 && status < 400,
})

export const getApi = () => api
