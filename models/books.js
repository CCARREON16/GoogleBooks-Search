const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const bookSchema = new Schema ({
    title: String,
    authors: String,
    description: String,
    img: {
        type: {String},
    },
    link:{
        type: String,
    }
});

const Books = mongoose.model("Books", bookSchema);
module.exports = Books;