import React from 'react';
import { Link } from '@reach/router';

export default function Number(props){
    return(
        <div>
            
            {isNaN(props.id) ?
            <h2>The word is: {props.id}</h2> :
            <h2>The number is: {props.id}</h2>
            }
        </div>
    )
}