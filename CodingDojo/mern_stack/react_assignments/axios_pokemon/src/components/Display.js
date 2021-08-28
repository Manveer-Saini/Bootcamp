import React, { useEffect } from 'react';
import { useState } from 'react';
import axios from 'axios';


export default function Display(props){
    const [pokemon, setPokemon] = useState([]);

    useEffect(() => {
        axios.get('https://pokeapi.co/api/v2/pokemon/?limit=807')
        .then(res => setPokemon(res.data.results))
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

