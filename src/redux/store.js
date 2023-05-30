import messagesReducer from "./messagesReducer"
import profileReducer from "./profileReducer"

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
    dispatch(action) {
        messagesReducer(this.state.messagesState, action)
        profileReducer(this.state.profileState, action)

        this._rerender(store)
    },
    observer(observe) {
        this._rerender = observe        
    }
}

export default store