import AddTask from '../AddTask/AddTask'
import FilterTask from '../FilterTask/FilterTask'
import styles from './EditBlock.module.scss'
function EditBlock(props) {
    return (
        <div className={styles.EditBlock}>
            <FilterTask urgentTask={props.urgentTask} NoturgentTask={props.NoturgentTask}/>
            <AddTask isModalActive={props.isModalActive} handleModalActive={props.handleModalActive}/>
        </div>
    )
}

export default EditBlock