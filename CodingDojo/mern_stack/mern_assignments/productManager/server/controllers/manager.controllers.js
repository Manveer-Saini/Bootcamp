const Product = require("../models/manager.models");

module.exports.createNewProduct = (request, response) => {
    const {title, price, description} = request.body
    Product.create({
        title,
        price,
        description
    })
        .then(newProduct => {
            console.log(newProduct)
            response.json(newProduct)
        })
        .catch(err => response.json({message: "Something went wrong", error: err}))
}