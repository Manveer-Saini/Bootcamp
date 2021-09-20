const Author = require("../models/author.model");

module.exports = {
    createNewAuthor: (request, response) => {
        const {name} = request.body
        Author.create({
            name
        })
        .then(newAuthor => {
            console.log("It worked in the backend.")
            console.log(newAuthor)
            response.json(newAuthor)
        })
        .catch(err =>{ 
            console.log("Create author failed")
            response.status(400).json(err)
        })
    },
    
    getAllAuthors: (request, response) => {
        Author.find({})
        .then(authors => response.json(authors))
        .catch(err =>{ 
            console.log("Get all authors failed")
            response.status(400).json(err)
        })
    },
    
    getAuthor: (request, response) => {
        Author.findOne({_id:request.params.id})
            .then(theAuthor => response.json(theAuthor))
            .catch(err =>{ 
                console.log("Get one author failed")
                response.status(400).json(err)
            })
    },
    
    deleteAuthor: (request, response) => {
        Author.deleteOne({_id: request.params.id})
            .then(deletedAuthor => response.json(deletedAuthor))
            .catch(err =>{ 
                console.log("Delete author failed")
                response.status(400).json(err)
            })
    },
    
    updateAuthor: (request, response) => {
        Author.findOneAndUpdate({_id:request.params.id}, request.body, {new:true, runValidators: true})
            .then(author => response.json(author))
            .catch(err =>{ 
                console.log("Update author failed")
                response.status(400).json(err)
            })
    }
}
