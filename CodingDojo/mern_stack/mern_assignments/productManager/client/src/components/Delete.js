import React from "react";
import axios from 'axios';
import {navigate } from "@reach/router";

const Delete = (props) => {
    const {productId, removeFromDom} = props;

    const deleteProduct = (e) => {
        // Call to the backend api to use Mongoose to delete from mongoDB
        axios.delete('http://localhost:8000/api/products/' + productId)
            .then(res => {
                if(removeFromDom){
                    removeFromDom(productId);
                }
                else{
                    console.log(res.data);
                    navigate(`/products`);
                }
                
                
            })
            .catch(err => console.log(err))
    }

    return (
        <button onClick={deleteProduct}>
            Delete
        </button>
    )
}

export default Delete;