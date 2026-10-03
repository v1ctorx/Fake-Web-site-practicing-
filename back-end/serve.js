const express = require("express");
const cors = require("cors");
const cars = require("./cars");

const app = express();

app.use(cors());

app.get("/cars", (req, res) => {
    res.json(cars);
});

app.listen(3000, () => {
    console.log("Server running on port 3000");
});