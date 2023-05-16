import { NavLink } from 'react-router-dom'
import styles from './DialogueItem.module.css'

function DialogueItem(props) {
    const path = '/messages/'

    return (
        <li className={styles.DialogueItem}>
            <NavLink className={styles.link} to={path + props.id}>{props.name}</NavLink>
        </li>
    )
}

export default DialogueItem