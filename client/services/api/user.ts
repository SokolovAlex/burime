import { getApi } from './api';

const api = getApi();
const changeNameUrl = '/api/user/change-name';

export const changeName = (name) =>
    api.post(changeNameUrl, { name }).then(response => response.data);
