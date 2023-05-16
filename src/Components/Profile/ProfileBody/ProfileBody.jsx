import Post from './Post/Post'
import styles from './ProfileBody.module.css'

function ProfileBody() {
    return (
        <div className={styles.ProfileBody}>

            <form className={styles.formPosts} action="">
                <h3 className={styles.formTitle}>Write new post</h3>                
                <textarea className={styles.textarea} name="" id="" cols="60" rows="10"></textarea>
            </form>

            <div className={styles.postsWrapper}>
                <Post message='Always remember: "Wolf is not a lion, wolf is a wolf"' likes='5' />
                <Post message='Always remember: "Wolf is not a dog, wolf is a wolf"' likes='14' />
                <Post message='Always remember: "Wolf is not a zebra, wolf is a wolf"' likes='3' />
                <Post message='Always remember: "Wolf is not an elephant, wolf is a wolf"' likes='48' />
            </div>
        </div>
    )
}

export default ProfileBody