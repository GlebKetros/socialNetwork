import ProfileBody from './ProfileBody/ProfileBody'
import ProfileHeader from './ProfileHeader/ProfileHeader'
import styles from './Profile.module.css'

function Profile(props) {
    return (
        <section className={styles.profile}>
            <div className={styles.container}>
                <ProfileHeader />
                <ProfileBody profileState={props.profileState} dispatch={props.dispatch} />
            </div>    
        </section>
    )
}

export default Profile