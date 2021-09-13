const ManagerController = require("../controllers/manager.controllers")

module.exports = (app) => {
    app.post("/api/products", ManagerController.createNewProduct)
    app.get("/api/products", ManagerController.getAllProducts)
    app.get("/api/products/:id", ManagerController.getProduct)
    app.delete('/api/products/:id', ManagerController.deletePerson);
    app.put("/api/products/:id", ManagerController.updateProduct)
}