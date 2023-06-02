import React from 'react'
import PostsWrapper from './PostsWrapper/PostsWrapper'
import styles from './ProfileBody.module.css'

function ProfileBody(props) {
    const newPostTextarea = React.createRef()

    const updateNewPostText = () => {
        const text = newPostTextarea.current.value
        props.updateNewPostText(text)
    }

    const addPost = () => {
        const text = props.profileState.newPostText
        props.addPost(text)
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