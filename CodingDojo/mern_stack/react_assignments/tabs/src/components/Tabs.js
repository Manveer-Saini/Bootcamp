import React from 'react';


function Tabs(props){
    const {theTab, setTabContent} = props;

    const handleClick = (event, tabAccess) => {
        console.log(tabAccess.content);
        setTabContent(tabAccess.content);
    }

    return(
        <div style={{display:"flex"}}>
            {theTab.map((tab, index) => (
                <div onClick={(event) => {handleClick(event, tab)}} key={index} style={{display:"flex", flexDirection:"column", 
                    padding:"10px", border:"3px solid black", margin:"5px"}}>
                        <h3>{tab.label}</h3>
                </div>
                ))}
        </div>   
    )
}

export default Tabs;