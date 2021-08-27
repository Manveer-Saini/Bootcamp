import React from 'react';
import { useState } from 'react';

function DisplayList(props){
    const {theList, setTheList} = props;

    const handleClick = (event, taskCheck) => {
        taskCheck.isDone = !taskCheck.isDone
        let updatedList = [...theList]
        console.log(event)
        setTheList(updatedList)
    }

    const deleteTask = (taskToDelete) =>{
        setTheList(theList.filter((task) => {return task.isDone !== taskToDelete.isDone;}))
    }

    return(
        <div style={{display:"block"}}>
            {theList.map((task, index) => (
                <div key={index} style={{display:"block", 
                    padding:"10px", border:"3px solid black", margin:"5px"}}>
                        <input type='checkbox' checked={task.isDone} onClick={(event) => handleClick(event, task)}/>
                        {task.isDone ? 
                        <h3 style={{textDecoration:"line-through"}} >{task.item}</h3> :
                        <h3>{task.item}</h3>}
                        <button onClick={(taskToDelete)=>deleteTask(task)}>Delete</button>
                </div>
                ))}
        </div>   
    )
}


export default DisplayList;
