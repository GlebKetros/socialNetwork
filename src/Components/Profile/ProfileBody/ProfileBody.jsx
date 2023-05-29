import React from 'react'
import PostsWrapper from './PostsWrapper/PostsWrapper'
import styles from './ProfileBody.module.css'
import { addPostActionCreator, updateNewPostTextActionCreator } from '../../../store'

function ProfileBody(props) {
    const newPostTextarea = React.createRef()

    const updateNewPostText = () => {
        const action = updateNewPostTextActionCreator(newPostTextarea.current.value)
        props.dispatch(action)
    }

    const addPost = () => {
        const action = addPostActionCreator(props.profileState.newPostText)
        // const postMessage = props.profileState.newPostText
        props.dispatch(action)
    } 
    
    return (
        <div className={styles.ProfileBody}>
            <form className={styles.formPosts} action="">
                <h3 className={styles.formTitle}>Write a new post</h3>                
                <textarea onChange={updateNewPostText} value={props.profileState.newPostText} className={styles.textarea} name="" ref={newPostTextarea} ></textarea>
                
                <button onClick={(event) => {
                    event.preventDefault()
                    addPost()
                }}>Send</button>
            </form>

            <PostsWrapper postsData={props.profileState.postsData} />
        </div>
    )
}

export default ProfileBody