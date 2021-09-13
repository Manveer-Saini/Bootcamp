import React, {useEffect, useState} from "react";
import axios from 'axios';

const Update = (props) => {
    const [product, setProduct] = useState({});
    const [title, setTitle] = useState("");
    const [price, setPrice] = useState("");
    const [description, setDescription] = useState("");

    // Get the information for the product to be updated
    useEffect(() => {
        axios.get("http://localhost:8000/api/products/" + props.id)
            .then(res => {
            //     setProduct({
            //     ...res.data
            // });
                setTitle(res.data.title);
                setPrice(res.data.price);
                setDescription(res.data.description)
        })
    }, [])

    const updateProduct = (e) => {
        e.preventDefault();
        axios.put("http://localhost:8000/api/products/" + props.id, {
            title,
            price,
            description
        })
        .then(res => console.log(res))
    }

return (
    // Form used to update the current product.
    <div>
        <form onSubmit={updateProduct}>
            <h1>Update a Person</h1>
            <div>
                <label>Title:</label>
                <input type="text" name="title" value={title} onChange={(e) => setTitle(e.target.value)}/>
            </div>
            <div>
                <label>Price:</label>
                <input type="text" name="price" value={price} onChange={(e) => setPrice(e.target.value)}/>
            </div>
            <div>
                <label>Description:</label>
                <input type="text" name="description" value={description} onChange={(e) => setDescription(e.target.value)}/>
            </div>
            
            <input type="submit"/>
        </form>
    </div>
)
}

export default Update;