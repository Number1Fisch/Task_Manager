import { useState } from 'react';
import './App.css';
import TaskData from './TaskData';
import Tasks from './Tasks.js';
import './TaskForm';
import TaskForm from './TaskForm';
function App() {
const[taskList, setTaskList] = useState(TaskData);
const [new_title,saveTitle] = useState();
   const [new_description, saveDescription] = useState();
    const retrieve= () =>{
        setTaskList([...taskList, {title: new_title, description: new_description}]);
    }
  return (
    <div className="App">
      <h1>What do you have to do today?</h1>
      <Tasks text="Hello " name = "Trevor " taskList = {taskList}/>
      <TaskForm retrieve = {retrieve()} saveDescription={saveDescription} saveTitle={saveTitle}
      new_description = {new_description} new_title={new_title}/>
     </div>
    
  );
}

export default App;
