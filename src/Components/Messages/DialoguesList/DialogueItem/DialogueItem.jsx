import { NavLink } from 'react-router-dom'
import styles from './DialogueItem.module.css'

function addClassToActiveLink ({isActive}) {
    return isActive ? `${styles.link} ${styles.activeLink}` : `${styles.link}`
}

function DialogueItem(props) {
    const path = '/messages/'

    return (
        <li className={styles.DialogueItem}>
            <NavLink className={addClassToActiveLink} to={path + props.id}>{props.name}</NavLink>
        </li>
    )
}

export default DialogueItem