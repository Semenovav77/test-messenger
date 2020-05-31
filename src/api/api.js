import axios from 'axios';

const instance = axios.create( {
    withCredentials: true,
    baseURL:'http://localhost:3004',
});

export const dialogsAPI = {
    getDialogs() {
        return instance.get('/dialogs')
    },
    getMessages(dialogId) {
        return instance.get(`/messages?dialogId=${dialogId}`)
    },
};
