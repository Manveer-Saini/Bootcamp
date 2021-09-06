const Joke = require("../models/joke.model")

module.exports.findAllJokes = (req, res) => {
    Joke.find()
        .then(allTheJokes => res.json({jokes: allTheJokes}))
        .catch(err => res.json({message: "Something went wrong", error: err}))
};

module.exports.createNewJoke = (req, res) => {
    Joke.create(req.body)
        .then(newJoke => res.json({joke: newJoke}))
        .catch(err => res.json({message: "Something went wrong", error: err}))
};

module.exports.findSingleJoke = (req, res) => {
    Joke.findOne({_id: req.params.id})
        .then(singleJoke => res.json({joke: singleJoke}))
        .catch(err => res.json({message: "Something went wrong", error: err}))
};

module.exports.updateSingleJoke = (req, res) => {
    Joke.findOneAndUpdate({_id: req.params.id}, req.body, {new: true})
        .then(updatedJoke => res.json({joke: updatedJoke}))
        .catch(err => res.json({message: "Something went wrong", error: err}))
}

module.exports.deleteSingleJoke = (req, res) => {
    Joke.deleteOne({_id: req.params.id})
        .then(result => res.json({result: result}))
        .catch(err => res.json({message: "Something went wrong", error: err}))
}