import React, {useState} from 'react';


const ProductForm = (props) => {
    const {product, setProduct, onSubmitProp} = props;

    // Applies the input for each field in product object.
    const inputBuilder = (e) => {
        let newProductObject = {...product};
        newProductObject[e.target.name] = e.target.value;
        setProduct(newProductObject);
    }

    return (
        <form onSubmit={onSubmitProp}>
            <div>
                <label>Title</label>
                <input type='text' value={product.title} name="title" onChange={inputBuilder}/>
            </div>

            <div>
                <label>Price</label>
                <input type='text' value={product.price} name="price" onChange={inputBuilder}/>
            </div>
            <div>
                <label>Description</label>
                <input type='text' value={product.description} name="description" onChange={inputBuilder}/>
            </div>
            <input type='submit'/>
        </form>
    );
}

export default ProductForm;