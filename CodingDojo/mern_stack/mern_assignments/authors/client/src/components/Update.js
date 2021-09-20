import React, {useEffect, useState} from "react";
import axios from 'axios';
import AuthorForm from "./AuthorForm";
import { navigate } from "@reach/router";

const Update = (props) => {
    const [errors, setErrors] = useState({});
    const {id} = props
    const [updatedAuthor, setUpdatedAuthor] = useState({
        name: "",
    });
    const [loaded, setLoaded] = useState(false);

    // Get the information for the product to be updated
    useEffect(() => {
        axios.get("http://localhost:8000/api/authors/" + id)
            .then(res => {
                setUpdatedAuthor(res.data);
                setLoaded(true);
        })
    }, [])

    const updateAuthor = (e) => {
        e.preventDefault();
        axios.put("http://localhost:8000/api/authors/" + id, updatedAuthor)
            .then(res => {
                console.log("This is in update:", res);
                navigate("/");
            })
            .catch(err => {
                console.log(err);
                console.log(err.response.data.errors);
                setErrors(err.response.data.errors);
            })
    }

    return (
        // Call form by passing original field values for product and updateAuthor Callback function.
        <div>
            <h4>Add a new author:</h4>
            {loaded && <AuthorForm author={updatedAuthor} setAuthor={setUpdatedAuthor} onSubmitProp={updateAuthor} errors={errors} />}
        </div>
    )
}

export default Update;