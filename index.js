const express = require("express");
const cors = require("cors");
let bodyParser = require("body-parser");
const mongoose = require("mongoose");
const morgan = require("morgan");
const dotenv = require("dotenv");
const authorRouter = require("./router/author");
const bookRouter = require("./router/book");
const app = express();

dotenv.config();
// Connect to MongoDB
const connect = async () => {
  try {
    await mongoose.connect(process.env.MONGOBD_URL);
    console.log("Connected to MongoDB");
  } catch (error) {
    console.log(error.message);
  }
};

connect();

app.use(bodyParser.json({ limit: "50mb" }));
app.use(cors());
app.use(morgan("common"));

// ROUTES

app.use("/v1/author", authorRouter);
app.use("/v1/book", bookRouter);




app.listen(8000, () => {
  console.log("Sever is running on port 8000");
});
