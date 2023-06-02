import ProfileBodyContainer from './ProfileBody/ProfileBodyContainer'
import ProfileHeader from './ProfileHeader/ProfileHeader'
import styles from './Profile.module.css'

function Profile(props) {
    return (
        <section className={styles.profile}>
            <div className={styles.container}>
                <ProfileHeader />
                <ProfileBodyContainer store={props.store} />
            </div>    
        </section>
    )
}

export default Profile