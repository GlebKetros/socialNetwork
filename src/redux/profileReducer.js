const UPDATE_NEW_POST_TEXT = 'UPDATE-NEW-POST-TEXT'
const ADD_POST = 'ADD-POST'

const profileReducer = (state, action) => {
    switch (action.type) {
        case UPDATE_NEW_POST_TEXT:
            state.newPostText = action.newText
            return state

        case ADD_POST:    
            if (action.postText.trim() === '') {
                alert('You can not post an empty message')
                return
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