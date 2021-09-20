import React from "react";
import axios from "axios";
import { useEffect, useState } from "react";
import AuthorForm from "./AuthorForm";
import { navigate, redirectTo } from "@reach/router";

const Create = () => {
    const [errors, setErrors] = useState({});
    // Used to create a new object.
    const [theAuthor, setTheAuthor] = useState({
        name: ""
    });

    // Create an author and send it to the back end.
    const createAuthor = e => {
        e.preventDefault();
        axios.post('http://localhost:8000/api/authors', theAuthor)
            .then(res=>{
                setTheAuthor({
                    name: ""
                });
                navigate("/");
            })
            .catch(err => {
                console.log(err);
                console.log(err.response.data.errors);
                setErrors(err.response.data.errors);
            })    }

    return (
        <AuthorForm author={theAuthor} setAuthor={setTheAuthor} onSubmitProp={createAuthor} errors={errors}/>
    )
}

export default Create;