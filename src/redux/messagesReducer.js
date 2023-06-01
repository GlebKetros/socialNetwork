const UPDATE_NEW_MESSAGE_TEXT = 'UPDATE-NEW-MESSAGE-TEXT'
const SEND_MESSAGE = 'SEND_MESSAGE'

const initialState = {
    dialoguesData: [
        {id: 1, name: 'Alexander Pushkin'},
        {id: 2, name: 'Godfather'},
        {id: 3, name: 'Robbin Hood'},
        {id: 4, name: 'Connor McGregor'},
        {id: 5, name: 'Jared Leto'},
    ],
    messagesData: [
        {id: 1, isMy: true, message: 'hello'},
        {id: 2, isMy: false, message: 'hello'},
        {id: 3, isMy: true, message: 'How are you?'},
        {id: 4, isMy: false, message: 'I\'m fine, thank you'},
        {id: 5, isMy: true, message: 'Ok, let\'s go to drink beer!'},
        {id: 6, isMy: false, message: 'GOOOOOOOOOOOO'},
    ],
    newMessageText: '',
}

const messagesReducer = (state = initialState, action) => {
    switch (action.type) {
        case UPDATE_NEW_MESSAGE_TEXT: 
            state.newMessageText = action.newMessageText
            return state

        case SEND_MESSAGE: 
            if (action.messageText === '') {
                alert('you can not send an empty message')
                return state
            }
            state.messagesData.push({
                id: 7,
                isMy: true,
                message: action.messageText,
            })
            state.newMessageText = ''
            return state

        default: 
            return state
    }
}

export const updateNewMessageTextActionCreator = (text) => 
    ({type: UPDATE_NEW_MESSAGE_TEXT, newMessageText: text})

export const sendMessageActionCreator = (text) => 
    ({type: SEND_MESSAGE, messageText: text})

export default messagesReducer