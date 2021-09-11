const ManagerController = require("../controllers/manager.controllers")

module.exports = (app) => {
    app.post("/api/products", ManagerController.createNewProduct)
    app.get("/api/products", ManagerController.getAllProducts)
    app.get("/api/products/:id", ManagerController.getProduct)
}