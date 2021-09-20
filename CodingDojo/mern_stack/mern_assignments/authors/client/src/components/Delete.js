import React from "react";
import axios from 'axios';
import {navigate } from "@reach/router";

const Delete = (props) => {
    const {authorId, removeFromDom} = props;

    const deleteAuthor = (e) => {
        // Call to the backend api to use Mongoose to delete from mongoDB
        axios.delete('http://localhost:8000/api/authors/' + authorId)
            .then(res => {
                if(removeFromDom){
                    removeFromDom(authorId);
                }
                else{
                    console.log(res.data);
                    navigate(`/`);
                }
                
                
            })
            .catch(err => console.log(err))
    }

    return (
        <button onClick={deleteAuthor}>
            Delete
        </button>
    )
}

export default Delete;