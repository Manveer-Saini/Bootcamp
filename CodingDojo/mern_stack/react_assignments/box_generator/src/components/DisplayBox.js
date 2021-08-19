import React, {useState} from 'react';


function DisplayBox(props){
    const {boxList} = props;
    return(
        <div style={{display:"flex"}}>
            {boxList.map((box, index) => (
                <div key={index} style={{display:"flex", flexDirection:"column", 
                    padding:"10px", border:"3px solid black", margin:"5px", backgroundColor:box.boxColor, height:(box.boxDimensions + "px"), width:(box.boxDimensions + "px")}}>
                </div>
                ))}
        </div>   
    )
}

export default DisplayBox;