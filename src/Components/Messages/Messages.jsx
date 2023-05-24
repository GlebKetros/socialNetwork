import Dialogue from './Dialogue/Dialogue'
import DialoguesList from './DialoguesList/DialoguesList'
import styles from './Messages.module.css'

function Messages(props) {
    return (
        <section className={styles.Messages}>
            <DialoguesList dialoguesData={props.messagesState.dialoguesData} />
            <Dialogue messagesData={props.messagesState.messagesData} />
        </section>
    )
}

export default Messages