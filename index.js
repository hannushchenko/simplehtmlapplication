const express = require("express");
const app = express();

const PORT = process.env.port || 8000;

app.get("/", (req, res) => {
  res.end("<h1>hello node world</h1>");
});

app.listen(PORT, () => console.log("Server has been started"));
