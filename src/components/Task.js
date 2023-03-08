import '../stylesheets/Task.css';
import { AiOutlineCloseCircle } from 'react-icons/ai';

const Task = ({ id, text, completed, completingTask, deletingTask }) => {
    return (
        <div className={completed ? 'container container-task completed rounded' : 'container container-task rounded '}>
            <div className='container text-task' onClick={() => completingTask(id)}>
                {text}
            </div>
            <div className='icons-container-task' onClick={() => deletingTask(id)}>
                <AiOutlineCloseCircle  className='icon-task'/>
            </div>
        </div>
    )
}

export default Task;