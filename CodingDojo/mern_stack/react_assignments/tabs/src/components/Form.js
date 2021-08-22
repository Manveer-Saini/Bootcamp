import { useState } from "react";
import React from 'react';

function Form (props){
    const {theTab, setTheTab} = props;
    // Set the color of the box to be white by default
    const [theLabel, setTheLabel] = useState("");
    const [theContent, setTheContent] = useState("");
    const createTab = (e) =>{
        e.preventDefault();
        // Append to array each box.
        setTheTab([...theTab, {
            label: theLabel,
            content: theContent
        }]);
        setTheLabel("");
        setTheContent("");
    }

    return(
        <div>
            <form onSubmit={createTab}>
                <label htmlFor='theLabel'>Label</label>
                <input type='text' value={theLabel} name="label" onChange={(e)=>{setTheLabel(e.target.value)}}/>

                <label htmlFor='theContent'>Content</label>
                <input type='text' value={theContent} name="content" onChange={(e)=>{setTheContent(e.target.value)}}/>
                
                <input type="submit" value="Create Tab" />
            </form>
        </div>
    )
}
export default Form;