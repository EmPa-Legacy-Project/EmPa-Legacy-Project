const express = require("express");
const app = express();
const mongoose = require("mongoose");
const router = require("./routes/book-routes")
const cors = require('cors')
const userRouter =require("./routes/users")

// Middlewares
app.use(express.json())
app.use(cors())
app.use("/books",router)
app.use("/auth",userRouter)






mongoose
  .connect(
    "mongodb+srv://book:book@books.nclgdh4.mongodb.net/book?retryWrites=true&w=majority"
  )
  .then(() => {
    console.log("Connected!");
  })
  .then(() => {app.listen(5000, () => {
    console.log("Server is running on port 3000");
  });
  }).catch((err)=>{
    console.log(err)
  })



