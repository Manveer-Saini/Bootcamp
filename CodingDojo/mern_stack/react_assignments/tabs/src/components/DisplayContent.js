import React from 'react';

function DisplayContent(props){
    const {tabContent} = props

    return(
        <div style={{display:"flex", padding:"10px", border:"3px solid black", margin:"5px"}}>
            <p>{tabContent}</p>
        </div>
    )
}

export default DisplayContent;