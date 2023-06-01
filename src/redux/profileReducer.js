const UPDATE_NEW_POST_TEXT = 'UPDATE-NEW-POST-TEXT'
const ADD_POST = 'ADD-POST'

const initialState = {
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
}

const profileReducer = (state = initialState, action) => {
    switch (action.type) {
        case UPDATE_NEW_POST_TEXT:
            state.newPostText = action.newText
            return state

        case ADD_POST:    
            if (action.postText.trim() === '') {
                alert('You can not post an empty message')
                return state
            }
            state.postsData.push({
                id: 5,
                author: 'Sergey Bandit',
                avatar: 'https://www.meme-arsenal.com/memes/81c76701265388ce2003998848380700.jpg',
                postText: action.postText,
                likes: 0
            })
            state.newPostText = ''
            return state

        default: 
            return state
    }
}

export const updateNewPostTextActionCreator = (text) => 
    ({type: UPDATE_NEW_POST_TEXT, newText: text})

export const addPostActionCreator = (text) => 
    ({type: ADD_POST, postText: text})

export default profileReducer