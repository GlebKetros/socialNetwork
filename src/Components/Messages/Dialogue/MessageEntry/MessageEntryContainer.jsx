import React from 'react'
import { sendMessageActionCreator, updateNewMessageTextActionCreator } from '../../../../redux/messagesReducer'
import MessageEntry from './MessageEntry'

function MessageEntryContainer (props) {
    const messagesData = props.store.getState().messagesState.messagesData
    const newMessageText = props.store.getState().messagesState.newMessageText 

    const updateNewMessageText = (message) => {
        const newMessageText = updateNewMessageTextActionCreator(message)
        props.store.dispatch(newMessageText)
    }

    const sendMessage = (message) => {
        const action = sendMessageActionCreator(message)
        props.store.dispatch(action)
    }

    return (
        <MessageEntry messagesData={messagesData} newMessageText={newMessageText} updateNewMessageText={updateNewMessageText} sendMessage={sendMessage} />
    )
}

export default MessageEntryContainer