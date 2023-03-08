import './App.css';
import TasksList from './components/TasksList';

const App = () => {
  return (
    <div className='container container-tasks-list mx-auto d-block rounded'>
       <h1 className='text-center'>My tasks</h1>
       <TasksList />
    </div>
  );
}

export default App;
