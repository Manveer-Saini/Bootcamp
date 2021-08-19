import React, {useState} from 'react';


function Form (props){
    const {boxList, setBoxList} = props;
    // Set the color of the box to be white by default
    const [theColor, setTheColor] = useState("");
    const [theDimensions, setTheDimensions] = useState("");
    const createBox = (e) =>{
        e.preventDefault();
        // Append to array each box.
        setBoxList([...boxList, {
            boxColor: theColor,
            boxDimensions: theDimensions
        }]);
        setTheColor("");
        setTheDimensions("");
    }

    return(
        <div>
            <form onSubmit={createBox}>
                <label htmlFor='theBox'>Color</label>
                <input type='text' value={theColor} name="boxColor" onChange={(e)=>{setTheColor(e.target.value)}}/>

                <label htmlFor='theDimensions'>Height and Width</label>
                <input type='text' value={theDimensions} name="heighWidth" onChange={(e)=>{setTheDimensions(e.target.value)}}/>
                
                <input type="submit" value="Create Box" />
            </form>
        </div>
    )
}

export default Form;