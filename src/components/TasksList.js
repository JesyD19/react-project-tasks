import TaskForm from './TaskForm';
import Task from './Task';
import '../stylesheets/TasksList.css';
import { useState } from 'react';

const TasksList = () => {
    const [tasks, setTasks] = useState([]);

    const deletingTask = id => {
        const updatedTasks = tasks.filter(tsk => tsk.id !== id);
        setTasks(updatedTasks);
    };

    const completingTask = id => {
        const updatedTasks = tasks.map(tsk => {
            if(tsk.id === id) {
                tsk.completed = !tsk.completed;
            }
            return tsk;
        });
        setTasks(updatedTasks);
    };

    const task = tasks.map(tsk => <Task key={tsk.id} id={tsk.id} text={tsk.text} completed={tsk.completed} deletingTask={deletingTask} completingTask={completingTask} />);

    const addingTask = task => {
        if(task.text.trim()) {
            task.text= task.text.trim();
            const updatedTasks = [task, ...tasks];  
            setTasks(updatedTasks);
        }
    };
    
    return (
        <>
            <TaskForm onSubmit={addingTask} />
            <div className='container-list-tasks'>
                {task}
            </div>
        </>
    )
}

export default TasksList;