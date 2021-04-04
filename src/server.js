"use strict";

const express = require("express");
const morgan = require("morgan");
const cors = require("cors");
const notFoundHndler = require("./middleware/404.js");
const errorHandler = require("./middleware/500.js");

const router = require("./auth/router");
const app = express();

app.use(express.json());
app.use(morgan("dev"));
app.use(cors());
app.use(express.urlencoded({ extended: true }));
app.use(router);

app.get("/", homeHandler);
app.use("/api/v1/", router);

app.use("*", notFoundHndler);
app.use(errorHandler);

function homeHandler(req, res) {
  res.send("Home Page");
}

module.exports = {
  app: app,
  start: (port) => {
    const PORT = port || 6000;
    app.listen(PORT, () => console.log(`Listening on ${PORT}`));
  },
};
