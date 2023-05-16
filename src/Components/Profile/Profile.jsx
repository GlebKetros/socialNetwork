import ProfileBody from './ProfileBody/ProfileBody'
import ProfileHeader from './ProfileHeader/ProfileHeader'
import styles from './Profile.module.css'

function Profile() {
    return (
        <section className={styles.profile}>
            <div className={styles.container}>
                <ProfileHeader />
                <ProfileBody />
            </div>    
        </section>
    )
}

export default Profile