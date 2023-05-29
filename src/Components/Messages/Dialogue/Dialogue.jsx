import styles from './Dialogue.module.css'
import MessageEntry from './MessageEntry/MessageEntry'
import MessagesWrapper from './MessagesWrapper/MessagesWrapper'



function Dialogue (props) {
    return (
        <div className={styles.Dialogue}>
            <MessagesWrapper messagesData={props.messagesData} />
            <MessageEntry newMessageText={props.newMessageText} dispatch={props.dispatch} />
        </div>
    )
}

export default Dialogue 