import React, { useEffect, useState } from "react";
import axios from "axios";
import { Button } from "@mui/material";
import styled from "@emotion/styled";
import "./Book.css";
import { useCookies } from "react-cookie";
import { useNavigate } from "react-router-dom";

const URL = "http://localhost:5000/books";

const token = localStorage.getItem("EmPa token");

const Books = () => {
  const navigate = useNavigate();


  const handleAddFavorite = async(id)=>{
    console.log(token)
    console.log(id)
    try {
        const response = await axios.post(`http://localhost:5000/user/${id}`, {
          token:token
        })
        console.log(response)
        

    } catch (error) {
      console.log(error);
    }
    
    setStar(!star)
  }

  const [cookies, setCookies] = useCookies(["access-token"]);
  const [star, setStar] = useState(false);
  const fetchHandler = async () => {
    try {
      return await axios.get(URL).then((res) => res.data);
    } catch (error) {
      console.log(error);
    }
  };

  const deleteBook = async (id) => {
    try {
      await axios
        .delete(`http://localhost:5000/books/${id}`)
        .then((res) => setBooks(res.data.books.books));
    } catch (error) {
      console.log(error);
    }
  };
  const deleteHandler = async (id) => {
    try {
      const confirmBox = window.confirm(
        "Do you really want to delete this book?"
      );
      if (confirmBox === true) {
        await deleteBook(id);
      }
    } catch (error) {
      console.log(error);
    }
  };
  const [books, setBooks] = useState();

  useEffect(() => {
    fetchHandler().then((data) => setBooks(data.books));
  }, []);

  const Tittle = styled.h1`
    text-align: center;
    margin: 20px;
  `;

  console.log(books);
  return (
    <div>
      <Tittle>Here is a list of all the books</Tittle>
      <ul>
        {books &&
          books.map((book, i) => (
            <li key={i}>
              <div className="card">
                <img src={book.image} alt={book.name} />
                <article>By {book.author}</article>
                <h3>{book.name}</h3>
                <p>{book.description}</p>

                <h3>Rs: {book.price} $</h3>
                {cookies["access-token"] ? <p>Available: {String(book.available)}</p> : ""}
                <Button
                  LinkComponent={book.Link}
                  to={`/books/${book._id}`}
                  sx={{ mt: "auto" }}
                  onClick={() => {
                    navigate(`/books/${book._id}`)
                  }}
                >
                  Update
                </Button>
                <Button
                  onClick={() => {
                    deleteHandler(book._id);
                  }}
                  sx={{ mt: "auto" }}
                >
                  Delete
                </Button>
                <Button
                  onClick={() => {
                    handleAddFavorite(book._id);
                  }}
                
                >
                  Add to Favorites
                </Button>
              </div>
            </li>
          ))}
      </ul>
    </div>
  );
};

export default Books;
