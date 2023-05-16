import styles from './ProfileHeader.module.css'

function ProfileHeader() {
    return (
        <div className={styles.ProfileHeader}>
            <div className={styles.avatarContainer}>
                <img className={styles.avatar} src="https://www.meme-arsenal.com/memes/81c76701265388ce2003998848380700.jpg" alt="" />                        
            </div>

            <div className={styles.description}>
                Sergey Bandit
            </div>
        </div>
    )
}

export default ProfileHeader