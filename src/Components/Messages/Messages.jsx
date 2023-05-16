import Dialogue from './Dialogue/Dialogue'
import DialoguesList from './DialoguesList/DialoguesList'
import styles from './Messages.module.css'

function Messages() {
    return (
        <section className={styles.Messages}>
            <DialoguesList />
            <Dialogue />
        </section>
    )
}

export default Messages