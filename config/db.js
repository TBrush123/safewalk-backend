const mongoose = require("mongoose");
const dotenv = require("dotenv").config();

const server = process.env.SERVER;

const connection = mongoose.createConnection(server + "/newDB").on("open", () => {
    console.log("Database connected");
}).on("error", () => {
    console.log("Database connection error");
});

module.exports = connection;