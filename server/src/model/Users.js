const mongoose =require("mongoose") ;


const UserSchema = new mongoose.Schema({
  username: { type: String, required: true, unique: true },
  password: { type: String, required: true },
  isAdmin:{type:Boolean, default:false},
  favoriteBooks:{type: Array}
  
});


module.exports = mongoose.model("users", UserSchema);
