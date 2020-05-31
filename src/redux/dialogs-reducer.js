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
    messages: [],
    currentDialog: null

};

const dialogsReducer = (state= initialState, action) => {
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