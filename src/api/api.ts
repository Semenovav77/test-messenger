import axios from 'axios';

const instance = axios.create( {
    withCredentials: true,
    baseURL:'http://localhost:3004',
});

export const dialogsAPI = {
    getDialogs() {
        return instance.get('/dialogs')
    },
    getMessages(dialogId: string) {
        return instance.get(`/messages?dialogId=${dialogId}`)
    },
    addMessage(text: string, senderId: string, dialogId: string) {
        return instance.post(`/messages`,
            {
                //@ts-ignore
                id: ([1e7] + -1e3 + -4e3 + -8e3 + -1e11).replace(/[018]/g, c => (c ^ crypto.getRandomValues(new Uint8Array(1))[0] & 15 >> c / 4).toString(16)),
                text: text,
                addedAt: new Date(),
                senderId: senderId,
                dialogId: dialogId
            })
    },
    delDialog(id: string) {
        return instance.delete(`/dialogs/${id}`)
    },
    delMessage(id: string) {
        return instance.delete(`/messages/${id}`)
    }
};
