"use strict";

const bcrypt = require("bcrypt");
const base64 = require("base-64");
const Users = require("../models/users-model.js");

module.exports = async (req, res, next) => {
  let basicHeaderParts = req.headers.authorization.split(" "); // ['Basic', 'sdkjdsljd=']
  let encodedString = basicHeaderParts.pop(); // sdkjdsljd=
  let decodedString = base64.decode(encodedString); // "username:password"
  let [username, password] = decodedString.split(":"); // username, password

  try {
    const user = await Users.findOne({ username: username });
    const valid = await bcrypt.compare(password, user.password);
    if (valid) {
      req.user = user;
      next();
    } else {
      throw new Error("Invalid User");
    }
  } catch (error) {
    res.status(403).send("Invalid Login");
  }
};
