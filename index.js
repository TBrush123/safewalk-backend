const app = require("./app");
const db = require("./config/db")
const dotenv = require("dotenv").config()

const port = process.env.PORT;

app.use("/api/contacts", require("./routes/routes"));

app.listen(port, () => {
    console.log(`The server is running on port ${port}`)
});