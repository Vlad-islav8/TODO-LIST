import styles from './AddTaskModal.module.scss'
import close from '../../../assets/icons/close.svg'
import { useEffect, useRef } from 'react'
function AddTaskModal(props) {
    const TitleRef = useRef(null) 
    const TextRef = useRef(null) 
    const DataRef = useRef(null) 
    
    const hanldeSubmit = () => {
        const newTask = {
            id: Date.now(), 
            title: TitleRef.current.value,
            text: TextRef.current.value,
            date: DataRef.current.value,
            compile: false,
        };
        
        TitleRef.current.value = ''
        TextRef.current.value = ''
        DataRef.current.value = ''
        props.handleAddTask(newTask); 
        props.handleModalActive(); 
    }

    return (
        <div className={`${styles.AddTaskModal} ${(props.isModalActive === true) ? styles.active : null}`}>
            <div className={styles.modalContent}>
                <header>
                    <h2>Новая задача</h2>
                    <button className={styles.closeBtn} onClick={props.handleModalActive}>
                        <img src={close} alt="" />
                    </button>
                </header>
                <div className={styles.AddTaskDesc}>
                    <div className={styles.inputGroup}>
                        <input type="text" placeholder='Заголовок задачи...' ref={TitleRef}/>
                        <div className={styles.dateTimeGroup}>
                            <label htmlFor="">Задачу выполнить до..</label>
                            <input type="date" placeholder='Дата' ref={DataRef}/>
                        </div>
                    </div>
                    <div>
                        <textarea 
                            placeholder='Описание задачи...'
                            rows="5"
                            ref={TextRef}
                        ></textarea>
                    </div>
                </div>
                <div className={styles.editBtnBar}>
                    <button className={styles.addBtn} onClick={hanldeSubmit}>Добавить задачу</button>
                </div>
            </div>
        </div>
    )
}

export default AddTaskModal