const express = require("express");
const dotenv = require("dotenv");
const fibonacci = require("./fibonacci.js")

dotenv.config();

const server = express();
server.use(express.json());

const port = process.env.PORT || 8080;
server.listen(port, () => {
    console.log("listening to port", port);
})



server.get("/fibonacci/:upto", (req,res) => {
    const upto = req.params.upto;
    res.send(fibonacci(upto));
})
