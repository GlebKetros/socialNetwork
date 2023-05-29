const UPDATE_NEW_POST_TEXT = 'UPDATE-NEW-POST-TEXT'
const ADD_POST = 'ADD-POST'
const UPDATE_NEW_MESSAGE_TEXT = 'UPDATE-NEW-MESSAGE-TEXT'
const SEND_MESSAGE = 'SEND_MESSAGE'

const store = {
    state: {
        messagesState: {
            dialoguesData: [
                {id: 1, name: 'Alexander Pushkin'},
                {id: 2, name: 'Godfather'},
                {id: 3, name: 'Robbin Hood'},
                {id: 4, name: 'Connor McGregor'},
                {id: 5, name: 'Jared Leto'},
            ],
            messagesData: [
                {id: 1, isMy: true, message: 'hello'},
                {id: 2, isMy: false, message: 'hello'},
                {id: 3, isMy: true, message: 'How are you?'},
                {id: 4, isMy: false, message: 'I\'m fine, thank you'},
                {id: 5, isMy: true, message: 'Ok, let\'s go to drink beer!'},
                {id: 6, isMy: false, message: 'GOOOOOOOOOOOO'},
            ],
            newMessageText: '',
        },
        profileState: {
            postsData: [
                {
                    id: 1, 
                    author: 'Sergey Bandit', 
                    avatar: 'https://www.meme-arsenal.com/memes/81c76701265388ce2003998848380700.jpg', 
                    postText: 'Always remember: "Wolf is not a lion, wolf is a wolf"', 
                    likes: 5
                },
                {
                    id: 2, 
                    author: 'Sergey Bandit', 
                    avatar: 'https://www.meme-arsenal.com/memes/81c76701265388ce2003998848380700.jpg', 
                    postText: 'Always remember: "Wolf is not a zebra, wolf is a wolf"', 
                    likes: 33
                },
                {
                    id: 3, 
                    author: 'Sergey Bandit', 
                    avatar: 'https://www.meme-arsenal.com/memes/81c76701265388ce2003998848380700.jpg', 
                    postText: 'Always remember: "Wolf is not an elephant, wolf is a wolf"', 
                    likes: 228
                },
                {
                    id: 4, 
                    author: 'Sergey Bandit', 
                    avatar: 'https://www.meme-arsenal.com/memes/81c76701265388ce2003998848380700.jpg', 
                    postText: 'Always remember: "Wolf is not a cat, wolf is a wolf"', 
                    likes: 48
                },
            ],    
            newPostText: ''    
        },
    },
    _rerender: '',
    _updateNewPostText(newText) {
        this.state.profileState.newPostText = newText
        this._rerender(store)
    },
    _addPost(postText) {
        if (postText.trim() === '') {
            alert('You can not post an empty message')
            return
        }
        this.state.profileState.postsData.push({
            id: 5,
            author: 'Sergey Bandit',
            avatar: 'https://www.meme-arsenal.com/memes/81c76701265388ce2003998848380700.jpg',
            postText: postText,
            likes: 0
        })
        this.state.profileState.newPostText = ''
        this._rerender(store)
    },
    _updateNewMessageText(newMessageText) {
        this.state.messagesState.newMessageText = newMessageText
        this._rerender(store)
    },
    _sendMessage(message) {
        if (message === '') {
            alert('you can not send an empty message')
            return
        }
        this.state.messagesState.messagesData.push({
            id: 7,
            isMy: true,
            message: message,
        })
        this.state.messagesState.newMessageText = ''
        this._rerender(store)
    },
    dispatch(action) {
        switch (action.type) {
            case UPDATE_NEW_POST_TEXT:
                this._updateNewPostText(action.newText)
                break

            case ADD_POST:           
                this._addPost(action.postText)
                break

            case UPDATE_NEW_MESSAGE_TEXT: 
                this._updateNewMessageText(action.newMessageText)
                break

            case SEND_MESSAGE: 
                this._sendMessage(action.messageText)
                break

            default: 
                console.log('case not found')
        }
    },
    observer(observe) {
        this._rerender = observe        
    }
}

export const updateNewPostTextActionCreator = (text) => {
    return {type: UPDATE_NEW_POST_TEXT, newText: text}
} 

export const addPostActionCreator = (text) => {
    return {type: ADD_POST, postText: text}
}

export const updateNewMessageTextActionCreator = (text) => {
    return {type: UPDATE_NEW_MESSAGE_TEXT, newMessageText: text}
}

export const sendMessageActionCreator = (text) => {
    return {type: SEND_MESSAGE, messageText: text}
}

export default store