const mongoose = require("mongoose");

const authorSchema = mongoose.Schema({
    name : {
        type: String,
        required: true
    },
    year : {
        type: Number,
        required: true
    },
    books : [
        {
            type: mongoose.Types.ObjectId,
            ref: "Book",
        }
    ]
})



const bookSchema = new mongoose.Schema({
  name: {
    type: String,
    required: true,
  },
  date: {
    type: String,
  },
  genres: {
    type: [String],
  },
  author: {
    type: mongoose.Schema.Types.ObjectId,
    ref : "Author"
  },
});

let Book = mongoose.model('Book', bookSchema);
let Author = mongoose.model('Author', authorSchema);
module.exports = {Book , Author};