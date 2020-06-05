import {dialogsAPI} from "../api/api";
import {openNotification} from "../helpers/notifications";
import {DialogType, MessageType} from "../components/types/types";
import {Dispatch} from "redux";
import {ThunkAction} from "redux-thunk";
import {AppStateType} from "./redux-store";

const SET_DIALOGS = 'dialogs/SET_DIALOGS';
const SET_MESSAGES = 'dialogs/SET_MESSAGES';
const SET_CURRENT_DIALOG = 'dialogs/SET_CURRENT_DIALOG';
const SET_USER_FULLNAME = 'dialogs/SET_USER_FULLNAME';
const SET_ISFETCHING_DIALOGS = 'dialogs/SET_ISFETCHING_DIALOGS';

type InitialStateType ={
    dialogs: Array<DialogType>,
    messages: Array<MessageType>,
    idAuth: string,
    currentDialog: string | null,
    userFullname: string,
    isFetchingDialogs: boolean
}

let initialState: InitialStateType = {
    dialogs: [],
    messages: [],
    idAuth: 'e715df23-ecb8-47ad-8ad5-dd4c3c7d7f1j',
    currentDialog: null,
    userFullname: 'Антон',
    isFetchingDialogs: false
};

const dialogsReducer = (state = initialState, action: ActionsType): InitialStateType => {
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
        case SET_ISFETCHING_DIALOGS:
            return {
                ...state,
                isFetchingDialogs: action.payload
            };
        default:
            return state;
    }
};

export default dialogsReducer;

type ActionsType = setDialogsActionType | setMessagesActionType | setCurrentDialogActionType | setUserFullnameActionType | setIsFetchingDialogsActionType

type setDialogsActionType = {
    type: typeof SET_DIALOGS,
    payload: Array<DialogType>

}

const setDialogs = (dialogs: Array<DialogType>): setDialogsActionType => {
    return {
        type: SET_DIALOGS,
        payload: dialogs
    };
};

type setMessagesActionType = {
    type: typeof SET_MESSAGES,
    payload: Array<MessageType>
}

const setMessages = (messages: Array<MessageType>): setMessagesActionType => {
    return {
        type: SET_MESSAGES,
        payload: messages
    };
};

type setCurrentDialogActionType = {
    type: typeof SET_CURRENT_DIALOG,
    payload: string | null
}

const setCurrentDialog = (id: string | null): setCurrentDialogActionType => {
    return {
        type: SET_CURRENT_DIALOG,
        payload: id
    };
};

type setUserFullnameActionType = {
    type: typeof SET_USER_FULLNAME,
    payload: string
}

export const setUserFullname = (fullname: string): setUserFullnameActionType => {
    return {
        type: SET_USER_FULLNAME,
        payload: fullname
    };
};

type setIsFetchingDialogsActionType = {
    type: typeof SET_ISFETCHING_DIALOGS,
    payload: boolean
}

export const setIsFetchingDialogs = (isFetching: boolean): setIsFetchingDialogsActionType => {
    return {
        type: SET_ISFETCHING_DIALOGS,
        payload: isFetching
    };
};

export const getDialogsAC = ():  ThunkAction<void, AppStateType, unknown, ActionsType> => {
    return (dispatch: Dispatch<ActionsType>) => {
        dispatch(setIsFetchingDialogs(true));
        dialogsAPI.getDialogs().then(data => {
            dispatch(setDialogs(data.data));
            dispatch(setIsFetchingDialogs(false));
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

export const getMessagesAC = (dialogId: string):  ThunkAction<void, AppStateType, unknown, ActionsType> => {
    return (dispatch: Dispatch<ActionsType>) => {
        dispatch(setCurrentDialog(dialogId));
        dialogsAPI.getMessages(dialogId).then(data => {
            dispatch(setMessages(data.data));
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

export const addMessagesAC = (text: string, senderId: string, dialogId: string):  ThunkAction<void, AppStateType, unknown, ActionsType> => {
    return (dispatch) => {
        dialogsAPI.addMessage(text, senderId, dialogId).then(data => {
            dispatch(getMessagesAC(dialogId));
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

export const delDialogAC = (id: string):  ThunkAction<void, AppStateType, unknown, ActionsType> => {
    return (dispatch) => {
        dialogsAPI.delDialog(id)
            .then(data => {
                dispatch(getDialogsAC());
                dispatch(setMessages([]));
                dispatch(setCurrentDialog(null));
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

export const delMessageAC = (id: string, dialogId: string): ThunkAction<void, AppStateType, unknown, ActionsType> => {
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