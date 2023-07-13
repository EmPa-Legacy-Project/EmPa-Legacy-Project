const express = require("express");
const app = express();
const mongoose = require("mongoose");
const router = require("./routes/book-routes")
const cors = require('cors')
const userRouter =require("./routes/users")
require('dotenv').config();

// Middlewares
app.use(express.json())
app.use(cors())
app.use("/books",router)
app.use("/auth",userRouter)




const PORT = process.env.PORT || 5000;

mongoose.connect(process.env.MONGODB_URI,{
  useNewUrlParser: true,
  useUnifiedTopology: true,
})
  .then(() => {app.listen(PORT, () => {
    console.log("Server is running on port 3001");
  });
  }).catch((err)=>{
    console.log(err)
  })



