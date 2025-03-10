import React, { useEffect, useState } from 'react';
import { BrowserRouter as Router, Routes, Route, useParams } from 'react-router-dom'; // Import useParams
import MainDesc from './Components/MainDesc/MainDesc';
import TaskDetail from './Components/Main/Tasks/TaskDetail/TaskDetail';

function App() {
    const basename = '/TODO-LIST'; 
    // состояние таска
    const [tasks, setTasks] = useState([]);
    // Все таски
    const [storeTask, setStoreTask] = useState([])
    // режим редактирования
    const [onEdit, setOnEdit] = useState(false);
    // Модальное окно
    const [isModalActive, setisModalActive] = useState(false)


    // Загрузка задач из localStorage
    useEffect(() => {
        const storedTasks = JSON.parse(localStorage.getItem('allTasks')) || []; // Добавляем || []
        setTasks(storedTasks);
        setStoreTask(storedTasks);
        console.log(storedTasks)
    }, []);
    // Переключение режима редактирования
    const handleEdit = () => {
        setOnEdit(!onEdit);
    };
    // Сохранение изменений в задаче
    const handleSave = (updatedTask) => {
        const updatedTasks = tasks.map((task) =>
            task.id === updatedTask.id ? updatedTask : task
        );
        setTasks(updatedTasks);
        setStoreTask(updatedTasks); //Обновляем storeTask
        localStorage.setItem('allTasks', JSON.stringify(updatedTasks));
    };
    // Удалить таск
    const onDelete = (taskId) => {
        const updatedTasks = tasks.filter((task) => task.id !== taskId);
        setTasks(updatedTasks);
        setStoreTask(updatedTasks);  //Обновляем storeTask
        localStorage.setItem('allTasks', JSON.stringify(updatedTasks));
    }
    // Модально окно
    const handleModalActive = () => {
        (isModalActive === true) ? setisModalActive(false) : setisModalActive(true)
    }
    // добавить таск
    const handleAddTask = (newTask) => {
        const updatedTasks = [...tasks, newTask];
        setTasks(updatedTasks);
        setStoreTask(updatedTasks); //Обновляем storeTask
        localStorage.setItem('allTasks', JSON.stringify(updatedTasks));
    };
    // поиск таска
    const handleSearh = (search) => {
        if (search === "" || !search) {
            setTasks(storeTask); // Восстанавливаем исходный массив
        } else {
            const searchTerm = search.toLowerCase();
            const updatedTasks = storeTask.filter(task => task.title.toLowerCase().includes(searchTerm));
            setTasks(updatedTasks);
        }
    };

    const urgentTask = () => {
        const sortedTasks = [...tasks].sort((a, b) => {
            return new Date(a.date) - new Date(b.date);
        });
        setTasks(sortedTasks);
    }

    const NoturgentTask = () => {
        const sortedTasks = [...tasks].sort((a, b) => {
            return new Date(b.date) - new Date(a.date);
        });
        setTasks(sortedTasks);
    }
    return (
        <Router basename={basename}>
            <Routes>
                <Route path="/"
                    element={
                        <MainDesc
                            tasks={tasks}
                            onDelete={onDelete}
                            isModalActive={isModalActive}
                            handleModalActive={handleModalActive}
                            handleAddTask={handleAddTask}
                            handleEdit={handleEdit}
                            handleSearh={handleSearh}
                            urgentTask={urgentTask} 
                            NoturgentTask={NoturgentTask}
                        />
                    }
                />
                {tasks.map((el) => (
                    <Route
                        path={`/task/${el.id}`}
                        element={
                            <TaskDetail
                                task={el}
                                onEdit={onEdit}
                                handleEdit={handleEdit}
                                onSave={handleSave}
                                onDelete={onDelete}
                            />
                        }
                    />
                ))}
            </Routes>
        </Router>
    );
}


function TaskDetailWrapper({ tasks, onEdit, handleEdit, handleSave }) {
    const { taskId } = useParams();
    const task = tasks.find(task => task.id === taskId);

    if (!task) {
        return <div>Task not found</div>; // Or redirect
    }

    return (
        <TaskDetail
            task={task}
            onEdit={onEdit}
            handleEdit={handleEdit}
            onSave={handleSave}
        />
    );
}

export default App;
