const dotenv = require("dotenv").config();
const express = require("express");
const mongoose = require("mongoose");
const bodyParser = require("body-parser");
const cors = require("cors");
const routes = require("./routes");
const path = require("path");

const app = express();
const PORT = process.env.PORT || 5000;

// middleware
app.use(express.json());
app.use(express.urlencoded({extended: false})); // handle data that comes in via the url
app.use(bodyParser.json());
app.use(cors());


// routes
app.use(routes);

app.get("/", (req, res) => {
  res.send("Home Page");
});

// consider wrapping this in async function but this should overall be good
mongoose
  .connect(process.env.MONGO_URI)
  .then((connect) => {
    app.listen(PORT, () => {
      console.log(`Server Running on port ${PORT}`);
    });
    console.log(`MongoDB Connected: ${connect.connection.host}`);
  })
  .catch((err) => {
    console.log(err);
    process.exit(1);
  });
