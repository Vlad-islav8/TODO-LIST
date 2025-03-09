import React, { useState } from 'react';
import styles from './TaskDetail.module.scss';
import okay from '../../../../assets/icons/okay.svg';
import edit from '../../../../assets/icons/edit.svg';
import Musor from '../../../../assets/icons/Musor.svg';
import returnImage from '../../../../assets/icons/return.svg';
import { Link } from 'react-router-dom';
function TaskDetail(props) {
    const { task, onEdit, handleEdit, onSave, } = props;
    return (
        <div className={styles.TaskDetail}>
            <header>
                <nav>
                    <Link to='/'>
                        <div className={styles.returnImageBlock}>
                            <img src={returnImage} alt="" className={styles.returnImage} />
                        </div>
                    </Link>
                    <div className={styles.date}>
                        {onEdit ? (
                            <input
                                type="date"
                                value={task.date}
                                onChange={(e) => onSave({ ...task, date: e.target.value })}
                            />
                        ) : (
                            `Дата выполнения: ${task.date}`
                        )}
                    </div>
                </nav>
            </header>
            <div className={`${styles.mainTask} `}>
                <div className={`${styles.taskinfo}` }>
                    {onEdit ? (
                        <>
                            <input
                                type="text"
                                value={task.title}
                                onChange={(e) => onSave({ ...task, title: e.target.value })}
                                className={styles.editInput}
                            />
                            <textarea
                                value={task.text}
                                onChange={(e) => onSave({ ...task, text: e.target.value })}
                                className={styles.editTextarea}
                                placeholder="Введите текст"
                            />
                        </>
                    ) : (
                        <>
                            <h1>{task.title}</h1>
                            <p>{task.text}</p>
                        </>
                    )}
                </div>
            </div>
            <div className={styles.buttonsBlock}>
                <button className={styles.completeButton}>
                    <Link to='/'>
                        <img src={okay} alt="Complete" />
                    </Link>
                </button>
                <button className={styles.editButton} onClick={handleEdit}>
                    <img src={edit} alt="Edit" />
                </button>
                <button className={styles.deleteButton} onClick={() => {props.onDelete(props.task.id)}}>      
                    <Link to='/'>
                        <img src={Musor} alt="Delete" />
                    </Link>
                </button>
            </div>
        </div>
    );
}

export default TaskDetail;