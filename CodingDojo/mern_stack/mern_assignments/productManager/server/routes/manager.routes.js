const ManagerController = require("../controllers/manager.controllers")

module.exports = (app) => {
    app.post("/api/products", ManagerController.createNewProduct)
}