import React, {useState} from 'react';


const ProductForm = (props) => {
    // const { initialTitle, initialPrice, initialDescription, onSubmitProp } = props;
    const {product, setProduct, onSubmitProp} = props;
    // const [title, setTitle] = useState(initialTitle);
    // const [price, setPrice] = useState(initialPrice);
    // const [description, setDescription] = useState(initialDescription);

    // Applies the input for each field in product object.
    const inputBuilder = (e) => {
        let newProductObject = {...product};
        newProductObject[e.target.name] = e.target.value;
        setProduct(newProductObject);
    }
    // const submitHandler = (e) => {
    //     // prevent default behavior of the submit
    //     e.preventDefault();

    //     // axios.post('http://localhost:8000/api/products', {
    //     //     title,
    //     //     price,
    //     //     description
    //     // })
    //     //     .then((res) => {
    //     //         console.log("This is in product form.")
    //     //         console.log(res)
    //     //     })
    //     //     .catch((err) => {console.log(err)})
    //     onSubmitProp({title, price, description});
    // }

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