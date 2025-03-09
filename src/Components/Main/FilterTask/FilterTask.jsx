import styles from './FilterTask.module.scss'
import filter from '../../../assets/icons/filter.svg'
import { useState } from 'react'
function FilterTask(props) {
    const [isActive, setisAcytive] = useState(false)
    const handleClick = () => {
        (isActive === true) ? setisAcytive(false) : setisAcytive(true)
    }
    return (
        <div className={styles.FilterTaskBlock}>
            <div className={styles.FilterTask}>
                <button className={styles.AddTaskBtn} onClick={handleClick}>
                    <img src={filter} alt="Добавить таск" />
                </button>
            </div>
            <div className={`${styles.Filters} ${(isActive === true) ? styles.active : null}`}>
                <button onClick={props.urgentTask}>Сначала срочные</button>
                <button onClick={props.NoturgentTask}>Сначала несрочные</button>
            </div>
        </div>

    )
}

export default FilterTask