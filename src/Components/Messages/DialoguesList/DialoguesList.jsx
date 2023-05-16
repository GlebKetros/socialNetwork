import DialogueItem from './DialogueItem/DialogueItem'
import styles from './DialoguesList.module.css'

const dialoguesData = [
    {id: 1, name: 'Alexander Pushkin'},
    {id: 2, name: 'Godfather'},
    {id: 3, name: 'Robbin Hood'},
    {id: 4, name: 'Connor McGregor'},
    {id: 5, name: 'Jared Leto'},
]

const dialoguesComponents = dialoguesData.map(element => <DialogueItem id={element.id} name={element.name} />)

function DialoguesList() {
    return (
        <section className={styles.dialoguesList}>
            <ul>
                {dialoguesComponents}
            </ul>
        </section>
    )
}

export default DialoguesList