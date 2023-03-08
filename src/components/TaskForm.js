import '../stylesheets/TaskForm.css';
import { useState } from 'react';
import { v4 as  uuidv4 } from 'uuid';

const TaskForm = ({ onSubmit }) => {
    const [input, setInput] = useState('');

    const handleChange = e => {
        setInput(e.target.value);  
    };
   
    const handleSending = e => {
        e.preventDefault();
        const newTask = {
            id: uuidv4(),
            text: input,
            completed: false
        };
        document.getElementById('inpt').value = '';
        onSubmit(newTask); 
    };

    return (
        <form className='container' onSubmit={handleSending}>
                <div className='row'>
                    <div className='col-md-10'>
                        <input id="inpt" className="form-control form-control-sm" type="text" placeholder="Write a task" aria-label=".form-control-lg example" onChange={handleChange}></input>
                    </div>
                    <div className='col-md-2'>
                        <button type="submit" className="btn btn-primary btn-sm btn-task" >Adding Task</button>
                    </div>     
                </div> 
        </form>
    )
}

export default TaskForm;