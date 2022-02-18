import React, { useState } from "react";
import Task from "./Task";
import TaskData from "./TaskData";

export default function Tasks({text, name, taskList}){

    if (!taskList){
        <p>No Tasks Available</p>
    }

  return (
      <span>
          {text}
          {name} 
          you have a task of {taskList.map((task) =>
          <Task title = {task.title} description = {task.description}/>)}
      </span>
  );
}