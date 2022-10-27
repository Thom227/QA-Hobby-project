const mongoose = require("mongoose");

mongoose.connect("mongodb://localhost:27017/football_db",
(err) => err ? console.error(err) : console.log("connected to DB"));

const footballSchema = new mongoose.Schema({
    name: {
        type: String,
        require: true
    },
    age: {
        type: Number,
        min: 1,
        max: 99
    },
    country: {
        type: String
    },
    team: {
        type: String
    },
    position: {
        type: String,
        required: true
    }
});

const footballModel = mongoose.model("football", footballSchema);
module.exports = {footballModel}