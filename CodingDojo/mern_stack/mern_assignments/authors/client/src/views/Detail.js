import React, {useEffect, useState} from "react";
import axios from 'axios';
import Delete from "../components/Delete";
// To view individual Author.
const Detail = (props) => {
    const [author, setAuthor] = useState({});
    const {id} = props;
    useEffect(() => {
        axios.get("http://localhost:8000/api/authors/" + id)
            .then(res => setAuthor({
                ...res.data
            }))
    }, []);
    return (
        <div>
            <p> {author.name}</p>
            <Delete productId={id}/>
        </div>
    )
}

export default Detail;