import { Task } from './Task/Task'
import styles from './Tasks.module.scss'
export function Tasks(props) {
    return (
        <div className={styles.Tasks}>
            {props.tasks.map((el, id) => {
                return (
                <Task task={el} handleEdit={props.handleEdit} onDelete={props.onDelete}/>
                )
            })}
        </div>
    )
}