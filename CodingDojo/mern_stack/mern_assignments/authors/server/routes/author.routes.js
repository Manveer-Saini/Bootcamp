const AuthorController = require("../controllers/author.controllers")

module.exports = (app) => {
    app.post("/api/authors", AuthorController.createNewAuthor)
    app.get("/api/authors", AuthorController.getAllAuthors)
    app.get("/api/authors/:id", AuthorController.getAuthor)
    app.delete('/api/authors/:id', AuthorController.deleteAuthor);
    app.put("/api/authors/:id", AuthorController.updateAuthor)
}