import React from "react";
import {Link} from '@reach/router'
import axios from "axios";

const ProductList = (props) => {
    const { removeFromDom } = props;
    const deleteProduct = (productId) => {
        axios.delete('http://localhost:8000/api/products/' + productId)
            .then(res => {
                removeFromDom(productId)
            })
    }
    return(
        <div>
            {
                props.product.map((product, idx) => {
                    return <p key={idx}>
                        <Link to={"/products/" + product._id} >{product.title}</Link>
                        |
                        <Link to={"/products/" + product._id + "/edit"}>
                            Edit
                        </Link>
                        |
                        <button onClick={(e)=>{deleteProduct(product._id)}}>
                            Delete
                        </button>
                    </p>
                })
            }
        </div>
    )
}

export default ProductList;