import AddTask from '../AddTask/AddTask'
import FilterTask from '../FilterTask/FilterTask'
import styles from './EditBlock.module.scss'
function EditBlock(props) {
    return (
    <div className={`${styles.EditBlock} ${(props.isModalActive) ? styles.none : ''}`}>
            <FilterTask urgentTask={props.urgentTask} NoturgentTask={props.NoturgentTask}/>
            <AddTask isModalActive={props.isModalActive} handleModalActive={props.handleModalActive}/>
        </div>
    )
}

export default EditBlock