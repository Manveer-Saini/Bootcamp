import React, {useEffect, useState} from "react";
import axios from 'axios';
import ProductForm from "../components/ProductForm";
import ProductList from "../components/ProductList";
const Main = (props) => {
    // Used to create a new object.
    const [theProduct, setTheProduct] = useState({
        title: "",
        price: "",
        description: ""
    });
    const [product, setProduct] = useState([]);
    const [loaded, setLoaded] = useState(false);

// Get all products from back end to use to add to product list.
    useEffect(() => {
        axios.get('http://localhost:8000/api/products')
            .then(res => {
                setProduct(res.data);
                setLoaded(true);
            })
            .catch(err => console.log(err))
    });
// Create a product and send it to the back end.
    const createProduct = e => {
        axios.post('http://localhost:8000/api/products', theProduct)
            .then(res=>{
                console.log(res);
                setTheProduct({
                    title: "",
                    price: "",
                    description: ""
                })
            })
    }

    // const removeFromDom = (productId) => {
    //     setProduct(product.filter(product => product._id !== productId));
    // }
    return(
        <div>
            <ProductForm product={theProduct} setProduct={setTheProduct} onSubmitProp={createProduct} />
            <hr/>
            {loaded && <ProductList products={product} setProducts={setProduct}/>}
        </div>
    );
}

export default Main;