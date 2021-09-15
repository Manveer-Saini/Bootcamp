import React from "react";
import {Link} from '@reach/router'
import Delete from "./Delete";

const ProductList = (props) => {
    const {products, setProducts} = props;
    

    const removeFromDom = (productId) => {
        let newList = products.filter((product) => product._id !== productId);
        setProducts(newList);
    }

    return(
        <div>
            {
                products.map((product, idx) => {
                    return <p key={idx}>
                        <Link to={"/products/" + product._id} >{product.title}</Link>
                        |
                        <Link to={"/products/" + product._id + "/edit"}>
                            Edit
                        </Link>
                        |
                        <Delete productId={product._id} removeFromDom={removeFromDom} />
                    </p>
                })
            }
        </div>
    )
}

export default ProductList;