const mongoose = require('mongoose');

const Jokes_Schema = new mongoose.Schema({
    setup: String,
    punchline: String,
}, {
    timestamps: {
        createdAt: 'created_at',
        updatedAt: 'updated_at'
    }
});

const Joke = mongoose.model("Joke", Jokes_Schema);

module.exports = Joke;