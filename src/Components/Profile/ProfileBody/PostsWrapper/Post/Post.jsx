import styles from './Post.module.css'

function Post(props) {
    return (
        <div className={styles.Post}>
            <div className={styles.avatarContainer}>
                <img className={styles.avatar} src={props.avatar} alt="avatar" />                
            </div>

            <div className={styles.postInner}>
                <p className={styles.author}>{props.author}</p>
                <p className={styles.postText}>{props.postText}</p>
                <p className={styles.likesCount}>{props.likes} likes</p>
            </div>
        </div>
    )
}

export default Post