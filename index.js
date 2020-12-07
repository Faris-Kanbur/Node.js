const express = require("express");
// const os =require("os");
const path =require("path");


var app = express();
const port = 5000;
const host = "http://localhost";

app.get("/", (req, res) => {
    res.send(`Server Os Type is ${os.type()}`)
});

app.listen(port, () => {
    console.log(`I am listenig on ${host}:${port}`);
});