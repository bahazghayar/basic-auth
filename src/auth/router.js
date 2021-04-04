"use strict";

const express = require("express");
const bcrypt = require("bcrypt");
const base64 = require("base-64");
const router = express.Router();

const basicAuth = require("./middleware/basic.js");
const Users = require("./models/users-model.js");

router.post("/signup", async (req, res) => {
  try {
    req.body.password = await bcrypt.hash(req.body.password, 10);
    const user = new Users(req.body);
    const record = await user.save(req.body);
    res.status(201).json(record);
  } catch (e) {
    res.status(403).send("Error Creating User");
  }
});

router.post("/signin", basicAuth, async (req, res) => {
  res.status(200).json(req.user);
});

module.exports = router;
