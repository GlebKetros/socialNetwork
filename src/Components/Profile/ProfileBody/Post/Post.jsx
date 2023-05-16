import styles from './Post.module.css'

function Post(props) {
    return (
        <div className={styles.Post}>
            <div className={styles.avatarContainer}>
                <img className={styles.avatar} src="https://www.meme-arsenal.com/memes/81c76701265388ce2003998848380700.jpg" alt="" />                
            </div>

            <div className={styles.postInner}>
                <p className={styles.author}>Sergey Bandit</p>
                <p className={styles.postText}>{props.message}</p>

                <p className={styles.likesCount}>{props.likes} likes</p>
            </div>
        </div>
    )
}

export default Post