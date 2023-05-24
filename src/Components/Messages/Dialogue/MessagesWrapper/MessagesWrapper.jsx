import styles from './MessagesWrapper.module.css'
import MessageItem from './MessageItem/MessageItem'

function MessagesWrapper (props) {
    const messagesComponents = props.messagesData.map(el => {
        return <MessageItem messageText={el.message} isMy={el.isMy} />
    })

    return (
        <div className={styles.MessagesWrapper}>
            {messagesComponents}
        </div>
    )
}

export default MessagesWrapper 