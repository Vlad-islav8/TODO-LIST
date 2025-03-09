import styles from './Main.module.scss'
import { Tasks } from './Tasks/Tasks'
 function Main(props) {
    return (
        <main className={styles.Main}>
            <Tasks tasks={props.tasks} handleEdit={props.handleEdit} onDelete={props.onDelete} />
        </main>

    )
}

export default Main