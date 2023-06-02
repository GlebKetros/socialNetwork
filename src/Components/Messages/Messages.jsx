import Dialogue from './Dialogue/Dialogue'
import DialoguesListContainer from './DialoguesList/DialoguesListContainer'
import styles from './Messages.module.css'

function Messages(props) {
    return (
        <section className={styles.Messages}>
            <DialoguesListContainer store={props.store} />
            <Dialogue store={props.store} />
        </section>
    )
}

export default Messages