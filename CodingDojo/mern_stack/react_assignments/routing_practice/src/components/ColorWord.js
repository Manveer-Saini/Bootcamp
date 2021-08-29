import React from 'react';
import { Link } from '@reach/router';

export default function ColorWord(props){
    return(
        <div>
            
            <h2 style={{color:props.textColor, backgroundColor:props.backgroundColor}}>{props.word}</h2>
            
        </div>
    )
}