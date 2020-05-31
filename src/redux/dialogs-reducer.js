const SET_DIALOGS = 'SET_DIALOGS';

let initialState = {
    dialogs: [
        {
            "id": 6592,
            "userName": "Анатолий Смирнов",
            "lastMessageDate": "19 марта",
            "avatar": "https://sun9-61.userapi.com/c850620/v850620874/15465f/C90iaSdwuK4.jpg?ava=1"
        },
        {
            "id": 6666,
            "userName": "Василий Смирнов",
            "lastMessageDate": "18 марта",
            "avatar": "https://sun9-61.userapi.com/c850620/v850620874/15465f/C90iaSdwuK4.jpg?ava=1"
        }
    ],
    messages: [
        {
            "id": "8e0eb1bf-0861-439c-ab3c-a2d3397cb77d",
            "text": "ауkjsvlksdjhvlk knv dnlkv dkjnvlkdbnvkjdbvlkdbvkjbdflv",
            "addedAt": "19 марта",
            "senderId": 1779,
            "dialogId": 6592
        },
        {
            "id": "31967f1c-b209-4538-9509-bd2b5fe426f3",
            "text": "?",
            "addedAt": "23 марта",
            "senderId": 1779,
            "dialogId": 6592
        },{
            "id": "31967f1c-b209-4538-9509-bd2b5fe426f3",
            "text": "?",
            "addedAt": "23 марта",
            "senderId": 1779,
            "dialogId": 6592
        },{
            "id": "31967f1c-b209-4538-9509-bd2b5fe426f3",
            "text": "?",
            "addedAt": "23 марта",
            "senderId": 1779,
            "dialogId": 6592
        },{
            "id": "31967f1c-b209-4538-9509-bd2b5fe426f3",
            "text": "?",
            "addedAt": "23 марта",
            "senderId": 1779,
            "dialogId": 6592
        },{
            "id": "31967f1c-b209-4538-9509-bd2b5fe426f3",
            "text": "?",
            "addedAt": "23 марта",
            "senderId": 1779,
            "dialogId": 6592
        },{
            "id": "31967f1c-b209-4538-9509-bd2b5fe426f3",
            "text": "?",
            "addedAt": "23 марта",
            "senderId": 1779,
            "dialogId": 6592
        },{
            "id": "31967f1c-b209-4538-9509-bd2b5fe426f3",
            "text": "?",
            "addedAt": "23 марта",
            "senderId": 1779,
            "dialogId": 6592
        },{
            "id": "31967f1c-b209-4538-9509-bd2b5fe426f3",
            "text": "?",
            "addedAt": "23 марта",
            "senderId": 1779,
            "dialogId": 6592
        },
    ],
    idAuth: 1779,
    currentDialog: null

};

const dialogsReducer = (state = initialState, action) => {
    switch (action.type) {
        case  SET_DIALOGS:
            return {
                ...state,
            };
        default:
            return state;
    }
};

export default dialogsReducer;