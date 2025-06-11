const express = require("express");
const app = express();
const jwt = require("jsonwebtoken");
const bcrypt = require("bcryptjs")

app.get("/", (req, res) => {
    res.send("Hello From Docker!");
});

module.exports = app;

const http = require("http");
const server = http.createServer(app);

server.listen(3000, () => {
    console.log("app  running on port 3000");
});
