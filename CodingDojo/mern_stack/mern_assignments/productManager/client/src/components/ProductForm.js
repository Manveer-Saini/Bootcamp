import React, {useState} from 'react';
import axios from 'axios';

const ProductForm = () => {
    const [title, setTitle] = useState("");
    const [price, setPrice] = useState("");
    const [description, setDescription] = useState("");

    const submitHandler = (e) => {
        // prevent default behavior of the submit
        e.preventDefault();

        axios.post('http://localhost:8000/api/products', {
            title,
            price,
            description
        })
            .then((res) => {
                console.log("This is in product form.")
                console.log(res)
            })
            .catch((err) => {console.log(err)})

    }

    return (
        <form onSubmit={submitHandler}>
            <div>
                <label>Title</label>
                <input type='text' onChange={(e)=> setTitle(e.target.value)}/>
            </div>

            <div>
                <label>Price</label>
                <input type='text' onChange={(e) => setPrice(e.target.value)}/>
            </div>
            <div>
                <label>Description</label>
                <input type='text' onChange={(e)=> setDescription(e.target.value)}/>
            </div>
            <input type='submit'/>
        </form>
    );
}

export default ProductForm;