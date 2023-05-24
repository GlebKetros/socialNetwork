import ProfileBody from './ProfileBody/ProfileBody'
import ProfileHeader from './ProfileHeader/ProfileHeader'
import styles from './Profile.module.css'

function Profile(props) {
    return (
        <section className={styles.profile}>
            <div className={styles.container}>
                <ProfileHeader />
                <ProfileBody postsData={props.profileState.postsData} addPost={props.addPost} updateNewPostText={props.updateNewPostText} newPostText={props.profileState.newPostText} />
            </div>    
        </section>
    )
}

export default Profile