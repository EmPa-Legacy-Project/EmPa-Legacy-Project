const Book = require("../model/Book");
const Users = require("../model/Users");
const jwt = require('jsonwebtoken');

const getAllBooks = async (req, res, next) => {
  // This route will provide all of the books
  let books;
  try {
    books = await Book.find();
  } catch (error) {
    console.log(error);
  }
  if (!books) {
    return res.status(404).json({ message: "No products found" });
  }
  return res.status(200).json({ books });
};
const getById = async (req, res, next) => {
  const id = req.params.id;
  let book;
  try {
    book = await Book.findById(id);
  } catch (error) {
    console.log(error);
  }
  if (!book) {
    return res.status(404).json({ message: "No Book found" });
  }
  return res.status(200).json({ book });
};

const addBook = async (req, res, next) => {
  const { name, author, description, price, available,image } = req.body;
  let book;
  try {
    book = new Book({
      name,
      author,
      description,
      price,
      available,
      image
    });
    await book.save();
  } catch (error) {
    console.log(error);
  }
  if (!book) {
    return res.status(500).json({ message: "Unable To Add" });
  }
  return res.status(201).json({ book });
};
const updateBook = async (req, res, next) => {
  const id = req.params.id;
  const { name, author, description, price, available, image } = req.body;
  let book;
  try {
    book = await Book.findByIdAndUpdate(id, {
      name,
      author,
      description,
      price,
      available,
      image
    });
    book = await book.save();
  } catch (error) {
    console.log(error);
  }
  if (!book) {
    return res.status(404).json({ message: "Unable To Update By this ID" });
  }
  return res.status(200).json({ book });
};

const deleteBook =async (req,res,next)=>{
  const id = req.params.id;
  let book
  try {
    book =await Book.findByIdAndRemove(id)
  } catch (error) {
    console.log(error)
  }
  if (!book) {
    return res.status(404).json({ message: "Unable To Delete By this ID" });
  }else{
    let books = await Book.find()
    return res.status(200).json({ message :"Product Successfully Delete", books:{books} });
  }
}

const addFavoriteBooks = async(req,res)=>{
  const token = req.body.token
  const id = req.params.id;

  try {
    let payload = jwt.verify(token, 'secret')
    let book = await Book.findById(id)
    let user = await Users.findOne({username:payload.username})
  
    if(!user.favoriteBooks){
       user.favoriteBooks=[book] 
       user.save()
    }else{
      user.favoriteBooks=[...user.favoriteBooks , book] 
      user.save()
    }
    return res.json({user})
  } catch (error) {
    console.log(error)
    res.status(500).json({ error: 'Failed ' });
  }
}

const removeFavoriteBooks = async(req,res)=>{
  const token = req.body.token
  const id = req.params.id;
  
  try {
    let payload = jwt.verify(token, 'secret')
    let book = await Book.findById(id)
    let user = await Users.findOne({username:payload.username})
  
    if(user.favoriteBooks.length>0){
      for(let i =0 ; i < user.favoriteBooks.length ; i++){
        console.log(user.favoriteBooks[i]._id.toHexString()) 
          console.log(id)
        if(id === user.favoriteBooks[i]._id.toHexString()){
          user.favoriteBooks.splice(i,1)
          user.save()
         return res.json({user})
        }
        
      }
    }else{
      return res.json({message:"Failed to find book"})
    }
    
  } catch (error) {
    console.log(error)
    res.status(500).json({ error:error });
  }
}

exports.getAllBooks = getAllBooks;
exports.addBook = addBook;
exports.getById = getById;
exports.updateBook = updateBook;
exports.deleteBook =deleteBook;

exports.addFavoriteBooks =addFavoriteBooks;
exports.removeFavoriteBooks =removeFavoriteBooks;