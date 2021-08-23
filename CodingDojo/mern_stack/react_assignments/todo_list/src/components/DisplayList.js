import React from 'react';
import { useState } from 'react';

function DisplayList(props){
    const {theList, setTheList} = props;

    const handleClick = (event, index) => {
        let updatedList = [...theList]
        updatedList[index].isDone = !updatedList[index].isDone
        console.log(updatedList[index].isDone)
        setTheList(updatedList)
    }

    const deleteTask = (taskToDelete) =>{
        setTheList(theList.filter((task) => {return task.item !== taskToDelete;}))
    }

    return(
        <div style={{display:"block"}}>
            {theList.map((task, index) => (
                <div key={index} style={{display:"block", 
                    padding:"10px", border:"3px solid black", margin:"5px"}}>
                        <input type='checkbox' onClick={(event) => handleClick(event, index)}/>
                        {task.isDone ? 
                        <h3 style={{textDecoration:"line-through"}} >{task.item}</h3> :
                        <h3>{task.item}</h3>}
                        <button onClick={(taskToDelete)=>deleteTask(task.item)}>Delete</button>
                </div>
                ))}
        </div>   
    )
}


export default DisplayList;
