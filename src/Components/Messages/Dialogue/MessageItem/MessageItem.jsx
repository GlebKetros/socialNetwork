import styles from './MessageItem.module.css'

function MessageItem (props) {
    return (
        <div className={styles.MessageItem}>
            <p className={styles.messageText}>{props.messageText}</p>
        </div>
    )
}

export default MessageItem 