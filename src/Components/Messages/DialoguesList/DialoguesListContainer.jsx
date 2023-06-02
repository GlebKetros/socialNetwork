import DialogueItem from './DialogueItem/DialogueItem'
import DialoguesList from './DialoguesList'

function DialoguesListContainer(props) {
    const dialoguesData = props.store.getState().messagesState.dialoguesData

    return (
        <DialoguesList dialoguesData={dialoguesData} />
    )
}

export default DialoguesListContainer