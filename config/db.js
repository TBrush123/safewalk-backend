const mongoose = require("mongoose")


const connection = mongoose.createConnection("mongodb://localhost:27017/newDB").on("open", () => {
    console.log("Database connected");
}).on("error", () => {
    console.log("Database connection error");
});

module.exports = connection;