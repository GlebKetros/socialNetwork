import { NavLink } from 'react-router-dom'
import styles from './Navigation.module.css'

const addClassToActiveLink = ({isActive}) => {
    return isActive ? `${styles.link} ${styles.active}` : `${styles.link}`
} 

function Navigation() {
    return (
        <nav className={styles.Navigation}>
            <NavLink className={addClassToActiveLink} to="/" >My profile</NavLink>
            <NavLink className={addClassToActiveLink} to="/messages" >Messages</NavLink>
            <NavLink className={addClassToActiveLink} to="/friends" >Friends</NavLink>
            <NavLink className={addClassToActiveLink} to="/settings" >Settings</NavLink>
        </nav>
    )
}

export default Navigation