import { useState } from "react";
import React from 'react';

function Form (props){
    const {theList, setTheList} = props;
    // Set the item by default to be an empty string and isComplete to be false by default
    const [theItem, setTheItem] = useState("");
    const [isComplete, setIsComplete] = useState(false);
    const createItem = (e) =>{
        e.preventDefault();
        // Append to array each new todo item.
        setTheList([...theList, {
            item: theItem,
            isDone: isComplete
        }]);
        setTheItem("");
    }

    return(
        <div>
            <form onSubmit={createItem}>
                <label htmlFor='theItem'></label>
                <input type='text' value={theItem} name="item" onChange={(e)=>{setTheItem(e.target.value)}}/>

                
                <input type="submit" value="Add" />
            </form>
        </div>
    )
}

export default Form;