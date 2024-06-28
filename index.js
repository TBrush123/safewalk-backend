const app = require("./app");
const db = require("./config/db");
const UserModel = require("./model/user.model");
const dotenv = require("dotenv").config();


const port = process.env.PORT;

app.listen(port, () => {
    console.log(`The server is running on port ${port}`)
});