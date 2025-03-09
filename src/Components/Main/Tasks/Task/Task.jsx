import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import styles from './Task.module.scss';
import okay from '../../../../assets/icons/okay.svg';
import edit from '../../../../assets/icons/edit.svg';
import Musor from '../../../../assets/icons/Musor.svg';
import calendarIcon from '../../../../assets/icons/calendaricon.svg';

export function Task(props) {
    const [isComplete, setisComplete] = useState(false)

    const handleComplete = () => {
        (isComplete === true) ? setisComplete(false) : setisComplete(true)
    }
    return (
        <div className={`${styles.Task} ${isComplete ? styles.complete : ''}`}>
            <Link to={`/task/${props.task.id}`} className={styles.taskContent}>
                <h1>{props.task.title}</h1>
                <div className={styles.dateBlock}>
                    <img src={calendarIcon} alt="Calendar" className={styles.calendarIcon} />
                    <p>Дата выполнения: <span className={styles.dateText}>{props.task.date}</span></p>
                </div>
            </Link>
            <div className={styles.buttonsBlock}>
                <button className={styles.completeButton} onClick={handleComplete}>
                    <img src={okay} alt="Complete" />
                </button>
                <Link to={`/task/${props.task.id}`} className={styles.editButton}>
                    <img src={edit} alt="Edit" />
                </Link>
                <button className={styles.deleteButton} onClick={() => {props.onDelete(props.task.id)}}>
                    <img src={Musor} alt="Delete" />
                </button>
            </div>
        </div>
    );
}