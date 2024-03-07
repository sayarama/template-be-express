require("dotenv").config();

const express = require("express");
const app = express();
const port = process.env.PORT;
const cors = require("cors")

const bookRouter = require("./src/Routers/book")

app.use(express.json());

app.use(
    cors({
      origin: "*",
      methods: "GET,HEAD,PUT,PATCH,POST,DELETE",
    })
);

app.use(bookRouter);

// HOME

app.get("/", (req, res) => {
    res.send("API For Food Recipe");
  });


app.listen(port, () => {
    console.log(`Example app listening on http://localhost:${port}`);
});