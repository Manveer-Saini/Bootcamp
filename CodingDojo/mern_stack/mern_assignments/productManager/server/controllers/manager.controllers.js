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

module.exports.getAllProducts = (request, response) => {
    Product.find({})
    .then(products => response.json(products))
    .catch(err => response.json(err))
}

module.exports.getProduct = (request, response) => {
    Product.findOne({id:request.params.id})
        .then(product => response.json(product))
        .catch(err => response.json(err))
}