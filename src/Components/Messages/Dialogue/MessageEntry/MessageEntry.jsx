import React from 'react'
import styles from './MessageEntry.module.css'

function MessageEntry (props) {
    const messageTextarea = React.createRef()

    const updateNewMessageText = () => {
        const message = messageTextarea.current.value
        props.updateNewMessageText(message)
    }

    const sendMessage = () => {
        const message = props.newMessageText
        props.sendMessage(message)
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