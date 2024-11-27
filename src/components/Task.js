import React from "react";

// /**
//  * TODO: implement the Task component
//  * @function Task
//  * @returns {React.Component} A <li> containing the task description and a checkbox to toggle completion
//  */

export default function Task({task, handleToggleTask}) {
    return (
        <li>
            <input type="checkbox" checked={task.status} onChange={handleToggleTask}></input>
            {task.description}
        </li>
    )
}
