const express = require("express");
const jwt = require("jsonwebtoken");
const bcrypt = require("bcrypt");
const UserModel = require("../model/Users");

const userRouter = express.Router();

userRouter.post("/register", async (req, res) => {
  const { username, password } = req.body;


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
    return res.json({ message:"User already exist"});
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
  const token = jwt.sign({ username }, "secret");

  res.json({
    token: token,
    userID: user._id,
    message: "User logged in successfully",
  });
});

 userRouter.post("/verify", async (req, res) => {
   if (!req.body.token) {
     res.send({ message: false });
   } 
   try {
     var payload = jwt.verify(req.body.token, "secret");
     
     if (payload) {
       const user = await UserModel.findOne({username: payload.username });
       
       if (user) {
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
