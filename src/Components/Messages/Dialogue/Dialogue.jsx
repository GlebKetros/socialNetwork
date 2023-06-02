import styles from './Dialogue.module.css'
import MessageEntryContainer from './MessageEntry/MessageEntryContainer'
import MessagesWrapperContainer from './MessagesWrapper/MessagesWrapperContainer'



function Dialogue (props) {
    return (
        <div className={styles.Dialogue}>
            <MessagesWrapperContainer store={props.store} />
            <MessageEntryContainer store={props.store} />
        </div>
    )
}

export default Dialogue 