import React from 'react'
import { addPostActionCreator, updateNewPostTextActionCreator } from '../../../redux/profileReducer'
import ProfileBody from './ProfileBody'

function ProfileBodyContainer(props) {
    const profileState = props.store.getState().profileState

    const updateNewPostText = (text) => {
        const action = updateNewPostTextActionCreator(text)
        props.store.dispatch(action)
    }

    const addPost = (text) => {
        const action = addPostActionCreator(text)
        props.store.dispatch(action)
    } 
    
    return (
        <ProfileBody profileState={profileState} 
            updateNewPostText={updateNewPostText} 
            addPost={addPost} />
    )
}

export default ProfileBodyContainer