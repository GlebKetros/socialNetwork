import React from 'react'
import PostsWrapper from './PostsWrapper/PostsWrapper'
import styles from './ProfileBody.module.css'

function ProfileBody(props) {
    const newPostTextarea = React.createRef()

    const updateNewPostText = () => {
        props.updateNewPostText(newPostTextarea.current.value)
    }

    const addPost = (postMessage) => {
        postMessage = newPostTextarea.current.value
        props.addPost(postMessage)
    } 
    
    return (
        <div className={styles.ProfileBody}>
            <form className={styles.formPosts} action="">
                <h3 className={styles.formTitle}>Write a new post</h3>                
                <textarea onChange={updateNewPostText} value={props.newPostText} className={styles.textarea} name="" ref={newPostTextarea} ></textarea>
                
                <button onClick={(event) => {
                    event.preventDefault()
                    addPost()
                }}>Send</button>
            </form>

            <PostsWrapper postsData={props.postsData} />
        </div>
    )
}

export default ProfileBody