import DialogueItem from './DialogueItem/DialogueItem'
import styles from './DialoguesList.module.css'

function DialoguesList(props) {
    const dialoguesComponents = props.dialoguesData.map(element => {
        return <DialogueItem id={element.id} name={element.name} />
    })

    return (
        <section className={styles.dialoguesList}>
            <ul>
                {dialoguesComponents}
            </ul>
        </section>
    )
}

export default DialoguesList