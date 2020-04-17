import { getApi } from './api';

const api = getApi();
const likeUrl = '/api/like';

export const like = (burimeId: number) =>
    api.post(likeUrl, { burimeId }).then(response => response.data);

export const dislike = (burimeId: number) =>
    api.delete(likeUrl, { params: { burimeId }}).then(response => response.data);
