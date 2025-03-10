import styles from './FilterTask.module.scss';
import filter from '../../../assets/icons/filter.svg';
import { useState } from 'react';

function FilterTask(props) {
    const [isActive, setIsActive] = useState(false);

    const handleClick = () => {
        setIsActive(!isActive); 
    };

    return (
        <div className={styles.FilterTaskBlock}>
            <div className={styles.FilterTask}>
                <button className={styles.AddTaskBtn} onClick={handleClick}>
                    <img src={filter} alt="Фильтр задач" />
                </button>
            </div>
            <div className={`${styles.Filters} ${isActive ? styles.active : ''}`}>
                <button onClick={props.urgentTask}>Сначала срочные</button>
                <button onClick={props.NoturgentTask}>Сначала несрочные</button>
            </div>
        </div>
    );
}

export default FilterTask;