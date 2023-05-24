import styles from './MessageTextarea.module.css'

function MessageTextarea () {
    return (
        <div className={styles.MessageTextarea}>
            <textarea className={styles.textarea} name="" id="" cols="30" rows="10"></textarea>
        </div>
    )
}

export default MessageTextarea