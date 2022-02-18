import React, { useState } from "react";
import TaskData from "./TaskData";
import App from "./App";

function TaskForm(props){
   
    return(
    <form>
        <label>
            Task Name:<br></br>
        <input type="text" id="title" onChange={e => props.saveTitle(e.target.value)}/>
        </label> 
        <br></br>
        <label>
            Task description:<br></br>
            <input type = "text" id = "description" onChange={e => props.saveDescription(e.target.value)}/>   
        </label>
        <br></br>
        <input type= "submit" name="submit" onClick={props.retrieve}/>
        
    </form>
    );
}
export default TaskForm;

