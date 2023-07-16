/* import React from "react";
import { Button } from "@mui/material";
import "./Book.css";
import { Link,  } from "react-router-dom";
import axios from "axios";

function Book(props , setBooks , handleDelete) {
  
  
  const { _id, name, author, description, price, image,available} = props.book;

  const token = localStorage.getItem("token")
  console.log(available)
  console.log(token)
  

  const deleteHandler = async (req, res) => {
    const confirmBox = window.confirm(
      "Do you really want to delete this book?"
    )
    if (confirmBox === true) {
      await axios
      .delete(`http://localhost:5000/books/${_id}`)
      .then((res) => setBooks(res.data.books));
     
    }
   
  };

  return (
    <div className="card">
      <img src={image} alt={name} />
      <article>By {author}</article>
      <h3>{name}</h3>
      <p>{description}</p>

      <h3>Rs: {price} $</h3>
      {token?(<p>Available: {String(available)}</p>):("")}
      <Button LinkComponent={Link} to={`/books/${_id}`} sx={{ mt: "auto" }}>
        Update
      </Button>
      <Button onClick={handleDelete} sx={{ mt: "auto" }}>
        Delete
      </Button>
    </div>
  );
}

export default Book;
 */