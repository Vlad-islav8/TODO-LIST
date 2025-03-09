import styles from './Header.module.scss';
import { Search } from './search/search';
import todoIcon from '../../assets/icons/todo.svg'; // Импортируем иконку

function Header(props) {
    return (
        <div className={styles.Header}>
            <div className={styles.headerContent}>
                <img src={todoIcon} alt="Todo Icon" className={styles.todoIcon} />
                <h1>Todo list твой трекер задач!</h1>
            </div>
            <Search handleSearh={props.handleSearh}/>
        </div>
    );
}

export default Header;