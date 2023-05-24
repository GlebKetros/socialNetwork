import styles from './Dialogue.module.css'
import MessageTextarea from './MessageTextarea/MessageTextarea'
import MessagesWrapper from './MessagesWrapper/MessagesWrapper'



function Dialogue (props) {
    
    return (
        <div className={styles.Dialogue}>
            <MessagesWrapper messagesData={props.messagesData} />
            <MessageTextarea />
        </div>
    )
}

export default Dialogue 