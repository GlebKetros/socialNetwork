import styles from './MessageItem.module.css'

function MessageItem (props) {
    function setStyles (isMy) {
        return isMy ? `${styles.MessageItem} ${styles.myMessage}` : `${styles.MessageItem}`
    }
    
    return (
        <div className={setStyles(props.isMy)}>
            <p className={styles.messageText}>{props.messageText}</p>
        </div>
    )
}

export default MessageItem 