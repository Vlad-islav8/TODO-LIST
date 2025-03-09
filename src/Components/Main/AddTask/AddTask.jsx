import styles from './AddTask.module.scss'
import plus from '../../../assets/icons/plus.svg'
function AddTask(props) {
    return (
        <div className={styles.AddTask}>
            <button className={styles.AddTaskBtn} onClick={props.handleModalActive}>
                <img src={plus} alt="Добавить таск" />
            </button>
        </div>
    )
}

export default AddTask