import React, { useEffect } from 'react';
import { useState } from 'react';


export default function Display(props){
    const [pokemon, setPokemon] = useState([]);

    useEffect(() => {
        fetch('https://pokeapi.co/api/v2/pokemon/?limit=807')
        .then(response => response.json())
        .then(response => setPokemon(response.results))
        .catch((err) => {
            console.log(err);
        })
    }, []);

    return(
        <div>
            <ul>
                {pokemon.length > 0 && pokemon.map((thePokemon, index) => {
                    return(<li>{thePokemon.name}</li>)
                })}
            </ul>
            
        </div>
    );
}

