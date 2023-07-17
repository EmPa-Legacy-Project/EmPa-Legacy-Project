const express = require("express");
const router = express.Router();

const booksController=require("../controllers/books-controller")

router.post("/:id",booksController.addFavoriteBooks)
router.delete("/:id",booksController.removeFavoriteBooks)


module.exports =router