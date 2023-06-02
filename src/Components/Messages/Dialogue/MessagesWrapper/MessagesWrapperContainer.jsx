import MessagesWrapper from './MessagesWrapper'

function MessagesWrapperContainer (props) {
    const messagesData = props.store.getState().messagesState.messagesData

    return (
        <MessagesWrapper messagesData={messagesData} />
    )
}

export default MessagesWrapperContainer