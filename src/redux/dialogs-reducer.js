import {dialogsAPI} from "../api/api";
import {openNotification} from "../helpers/notifications";

const SET_DIALOGS = 'dialogs/SET_DIALOGS';
const SET_MESSAGES = 'dialogs/SET_MESSAGES';
const SET_CURRENT_DIALOG = 'dialogs/SET_CURRENT_DIALOG';
const SET_USER_FULLNAME = 'dialogs/SET_USER_FULLNAME';

let initialState = {
    dialogs: [],
    messages: [],
    idAuth: 'e715df23-ecb8-47ad-8ad5-dd4c3c7d7f1j',
    currentDialog: null,
    userFullname: 'Антон'
};

const dialogsReducer = (state = initialState, action) => {
    switch (action.type) {
        case  SET_DIALOGS:
            return {
                ...state,
                dialogs: action.payload
            };
        case  SET_MESSAGES:
            return {
                ...state,
                messages: action.payload
            };
        case  SET_CURRENT_DIALOG:
            return {
                ...state,
                currentDialog: action.payload
            };
        case SET_USER_FULLNAME:
            return {
                ...state,
                userFullname: action.payload
            };
        default:
            return state;
    }
};

export default dialogsReducer;

const setDialogs = (dialogs) => {
    return {
        type: SET_DIALOGS,
        payload: dialogs
    };
};

const setMessages = (messages) => {
    return {
        type: SET_MESSAGES,
        payload: messages
    };
};

const setCurrentDialog = (id) => {
    return {
        type: SET_CURRENT_DIALOG,
        payload: id
    };
};

export const setUserFullname = (fullname) => {
    return {
        type: SET_USER_FULLNAME,
        payload: fullname
    };
};

export const getDialogsAC = () => {
    return (dispatch) => {
        dialogsAPI.getDialogs().then(data => {
            dispatch(setDialogs(data.data))
        })
            .catch(err => {
                openNotification({
                    title: 'Ошибка!',
                    text: err.message,
                    type: 'error',
                });
            })
    }
};

export const getMessagesAC = (dialogId) => {
    return (dispatch) => {
        dispatch(setCurrentDialog(dialogId));
        dialogsAPI.getMessages(dialogId).then(data => {
            dispatch(setMessages(data.data))
        })
            .catch(err => {
                openNotification({
                    title: 'Ошибка!',
                    text: err.message,
                    type: 'error',
                });
            })
    }
};

export const addMessagesAC = (text, senderId, dialogId) => {
    return (dispatch) => {
        dialogsAPI.addMessage(text, senderId, dialogId).then(data => {
            dispatch(getMessagesAC(dialogId))
        })
            .catch(err => {
                openNotification({
                    title: 'Ошибка!',
                    text: err.message,
                    type: 'error',
                });
            })
    }
};

export const delDialogAC = (id) => {
    return (dispatch) => {
        dialogsAPI.delDialog(id)
            .then(data => {
                dispatch(getDialogsAC())
                dispatch(setMessages([]))
        })
            .catch(err => {
                openNotification({
                    title: 'Ошибка!',
                    text: err.message,
                    type: 'error',
                });
            })
    }
};

export const delMessageAC = (id, dialogId) => {
    return (dispatch) => {
        dialogsAPI.delMessage(id)
            .then(data => {
                dispatch(getMessagesAC(dialogId))
        })
            .catch(err => {
                openNotification({
                    title: 'Ошибка!',
                    text: err.message,
                    type: 'error',
                });
            })
    }
};