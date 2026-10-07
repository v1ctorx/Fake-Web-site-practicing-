const express = require("express");
const cors = require("cors");
const cars = require("./cars");

const app = express();

app.use(cors());

app.get("/cars", (req, res) => {
    res.json(cars);
});

const PORT = process.env.PORT || 3000;

app.listen(PORT, () => {
    console.log(`The Server is working on ${PORT} port`);
});