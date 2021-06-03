const ADD_MESSAGE = 'ADD_MESSAGE',
      GET_MESSAGES = 'GET_MESSAGES',
      GET_DIALOGS = 'GET_DIALOGS',
      GET_CURRENT_MESSAGE_TEXT = 'GET_CURRENT_MESSAGE_TEXT';


const initialState = {
    messages: [
        { id: 1, key: 1, message: 'Hi' },
        { id: 2, key: 2, message: 'How is it going today?' },
        { id: 3, key: 3, message: 'Ok' },
        { id: 4, key: 4, message: 'Yo' }
    ],

    dialogs: [
        {
            id: 1,
            key: 1,
            name: 'Kotiara',
            avatar: "https://www.blast.hk/attachments/64805/"
        },
        
        {
            id: 3,
            key: 3,
            name: 'Sveta',
            avatar: "https://www.digiseller.ru/preview/869863/p1_2810224_21e2397b.jpeg"
        }
    ],
};


const messagesReducer = (state = initialState, action) => {
    
    switch (action.type) {

        case ADD_MESSAGE:
            return {
                ...state,
                messages: [
                    ...state.messages, 
                    {
                        id: state.messages.length + 1,
                        message: action.message
                    }
                ]
            }
         
        default:
            return state;
    }
};

export default messagesReducer;

export const addMessageAC = (message) => ({type: ADD_MESSAGE, message});
export const getMessagesAC = {type: GET_MESSAGES};
export const getDialogsAC = {type: GET_DIALOGS};
export const getCurrentMessageTextAC = {type: GET_CURRENT_MESSAGE_TEXT};
