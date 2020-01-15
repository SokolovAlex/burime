import axios from 'axios'

const api = axios.create({
    baseURL: 'http://localhost:3003/',
    withCredentials: true,
    headers: {
        'Content-Type': 'application/json',
    },
    validateStatus: status => status >= 200 && status < 400,
})

export const getApi = () => api
