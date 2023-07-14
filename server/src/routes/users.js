const express = require("express");
const jwt = require("jsonwebtoken");
const bcrypt = require("bcrypt");
const UserModel = require("../model/Users");

const userRouter = express.Router();

userRouter.post("/register", async (req, res) => {
  const { username, password } = req.body;

  console.log(username);

  const user = await UserModel.findOne({ username: username });

  if (!user) {
    const hashPassword = await bcrypt.hash(password, 10);
    const newUser = new UserModel({
      username,
      password: hashPassword,
    });
    await newUser.save();

    const token = jwt.sign({ username }, "secret");

    return res.json({
      token: token,
      message: "User registered successfully!",
    });
  } else {
    return    res.json("User already exist");
  }
});

userRouter.post("/login", async (req, res) => {
  const { username, password } = req.body;
  const user = await UserModel.findOne({ username });

  if (!user) {
    return res.json({ message: "User Doesn't Exist! Register first" });
  }

  const isPasswordValid = await bcrypt.compare(password, user.password);

  if (!isPasswordValid) {
    return res.json({ message: "Username or Password Is Incorrect!" });
  }
  const token = jwt.sign({ id: user._id }, "secret");

  res.json({ token: token, userID: user._id });
});

userRouter.post("/verify", async (req, res) => {
  if (!req.body.token) {
    res.send({ message: false });
  } //decrypt and get back to the user id
  try {
    var payload = jwt.verify(req.body.token);
    if (payload) {
      const user = await UserModel.findOne({ _id: payload.id });
      if (user) {
        var token = jwt.sign({ id: user._id });
        res.send(user);
      } else {
        res.send("invalid token");
      }
    } else {
      res.send("invalid token");
    }
  } catch (error) {
    res.send("invalid token");
  }
});

module.exports = userRouter;
