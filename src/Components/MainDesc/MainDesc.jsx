import { useState } from 'react'
import Header from '../Header/Header'
import EditBlock from '../Main/EditBlock/EditBlock'
import Main from '../Main/Main'
import AddTaskModal from './AddTaskModal/AddTaskModal'
import styles from './MainDesc.module.scss'
function MainDesc(props) {
    
    return (
        <div className={styles.MainDesc}>
            <Header 
                handleSearh={props.handleSearh}
            />
            <Main 
                tasks={props.tasks}
                handleEdit={props.handleEdit} 
                onDelete={props.onDelete} 
            />
            <EditBlock 
                isModalActive={props.isModalActive} 
                handleModalActive={props.handleModalActive}
                urgentTask={props.urgentTask} 
                NoturgentTask={props.NoturgentTask}
            />
            <AddTaskModal 
                isModalActive={props.isModalActive} 
                handleModalActive={props.handleModalActive} 
                handleTaskAdded={props.handleTaskAdded} 
                handleAddTask={props.handleAddTask}
            />
        </div>
    )
}

export default MainDesc