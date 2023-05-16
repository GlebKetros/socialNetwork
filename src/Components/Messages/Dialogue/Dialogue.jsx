import styles from './Dialogue.module.css'
import MessageItem from './MessageItem/MessageItem'

const messagesData = [
    {id: 1, message: 'hello'},
    {id: 2, message: 'hello'},
    {id: 3, message: 'How are you?'},
    {id: 4, message: 'I\'m fine, thank you'},
    {id: 5, message: 'Ok, let\'s go to drink beer!'},
    {id: 6, message: 'GOOOOOOOOOOOO'},
]

const messagesComponents = messagesData.map(el => {
    return <MessageItem messageText={el.message}/>
})

function Dialogue () {
    return (
        <div className={styles.Dialogue}>
            {messagesComponents}
        </div>
    )
}

export default Dialogue 