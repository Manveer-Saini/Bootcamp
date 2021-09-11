import React from "react";
import {Link} from '@reach/router'

const ProductList = (props) => {
    
    return(
        <div>
            {
                props.product.map((product, idx) => {
                    return <p>
                        <Link to={"/products/" + product.id} key={idx}>{product.title}</Link>
                    </p>
                })
            }
        </div>
    )
}

export default ProductList;