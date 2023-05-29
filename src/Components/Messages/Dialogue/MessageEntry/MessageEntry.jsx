import React from 'react'
import styles from './MessageEntry.module.css'
import { sendMessageActionCreator, updateNewMessageTextActionCreator } from '../../../../store'

function MessageEntry (props) {
    const messageTextarea = React.createRef()

    const updateNewMessageText = () => {
        const newMessageText = updateNewMessageTextActionCreator(messageTextarea.current.value)
        props.dispatch(newMessageText)
    }

    const sendMessage = (mesage) => {
        const action = sendMessageActionCreator(props.newMessageText)
        props.dispatch(action)
    }

    return (
        <div className={styles.MessageEntry}>
            <form className={styles.form} onSubmit={(event) => {
                event.preventDefault()
                sendMessage()
            }} action="">
                <textarea 
                    className={styles.textarea} 
                    onChange={updateNewMessageText} 
                    value={props.newMessageText} 
                    ref={messageTextarea} 
                    cols="30" rows="10">
                </textarea>

                <button className={styles.button}>Send</button>                
            </form>

        </div>
    )
}

export default MessageEntry