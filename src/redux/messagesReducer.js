const UPDATE_NEW_MESSAGE_TEXT = 'UPDATE-NEW-MESSAGE-TEXT'
const SEND_MESSAGE = 'SEND_MESSAGE'

const messagesReducer = (state, action) => {
    switch (action.type) {
        case UPDATE_NEW_MESSAGE_TEXT: 
            state.newMessageText = action.newMessageText
            return state

        case SEND_MESSAGE: 
            if (action.messageText === '') {
                alert('you can not send an empty message')
                return
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