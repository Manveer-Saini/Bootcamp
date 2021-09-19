import React, {useEffect, useState} from "react";
import axios from 'axios';
import ProductForm from "./ProductForm";
import { navigate } from "@reach/router";

const Update = (props) => {
    const {id} = props
    // const [product, setProduct] = useState({title: "", price: "", description: ""});
    const [updatedProduct, setUpdatedProduct] = useState({
        title: "",
        price: "",
        description: ""
    });
    // const [title, setTitle] = useState("");
    // const [price, setPrice] = useState("");
    // const [description, setDescription] = useState("");
    const [loaded, setLoaded] = useState(false);
    // Get the information for the product to be updated
    useEffect(() => {
        axios.get("http://localhost:8000/api/products/" + id)
            .then(res => {
                
                // console.log("Here is the product in update: ", res.data);
                setUpdatedProduct(res.data);
                setLoaded(true);
                // console.log("Here is the product in update: ", updatedProduct);
                // setTitle(res.data.title);
                // setPrice(res.data.price);
                // setDescription(res.data.description)
        })
    }, [])

    const updateProduct = (e) => {
        // console.log("Here is the product in update: ", productToUpdate);
        e.preventDefault();
        axios.put("http://localhost:8000/api/products/" + id, updatedProduct)
            .then(res => {
                console.log(res)
                console.log("Here is the product in update: ", res.data);
                navigate("/products")
            })
    }

    return (
        // Call form by passing original field values for product and updateProduct Callback function.
        <div>
            <h1>Update a Person</h1>
            {/* {console.log(product.title)} */}
            {loaded && <ProductForm product={updatedProduct} setProduct={setUpdatedProduct} onSubmitProp={updateProduct} />}
            {/* <form onSubmit={updateProduct}>
                
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
            </form> */}
        </div>
    )
}

export default Update;