import React, {useEffect, useState} from "react";
import axios from 'axios';
import Delete from "../components/Delete";

const Detail = (props) => {
    const [product, setProduct] = useState({});
    const {id} = props;
    useEffect(() => {
        axios.get("http://localhost:8000/api/products/" + id)
            .then(res => setProduct({
                ...res.data
            }))
    }, []);
    return (
        <div>
            <p> {product.title}</p>
            <p>Price: {product.price}</p>
            <p>Description: {product.description}</p>
            <Delete productId={id}/>
        </div>
    )
}

export default Detail;