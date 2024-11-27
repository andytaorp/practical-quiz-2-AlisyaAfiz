import React from "react";

// /**
//  * TODO: implement the Task component
//  * @function Task
//  * @returns {React.Component} A <li> containing the task description and a checkbox to toggle completion
//  */

export default function Task({task, onToggleTask, onDeleteTask}) {
    return (
        <li style={{ textDecoration: task.status ? "line-through" : "none" }}>
            <input type="checkbox" checked={task.status} onChange={() => onToggleTask(task.id)}></input>
            {task.description}
            <button onClick={() => onDeleteTask(task.id)}>Delete</button>
        </li>
    )
}
