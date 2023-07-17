import React from 'react'
import { useEffect } from 'react'
import axios from 'axios'
import { useState } from 'react'


const Profile = () => {

    const token = localStorage.getItem("EmPa token")
    const [user, setUser] = useState("")
    

 useEffect(()=>{
    const getUserData = async(req,res)=>{
        try{
            const response = await axios
            .post("http://localhost:5000/auth/verify", {
              token:token
            })
           setUser(response.data)
           console.log(response)
        }catch(error){
            console.log(error)
        }
        

    }
    getUserData()
 },[ token])


  return (
    <div>
      <h1>Here is a list of your favorite books</h1>
        <div>
      
      <ul>
        {user.favoriteBooks &&
          user.favoriteBooks.map((book, i) => (
            <li key={i}>
              <div className="card">
                <img src={book.image} alt={book.name} />
                <article>By {book.author}</article>
                <h3>{book.name}</h3>
                <p>{book.description}</p>

                <h3>Rs: {book.price} $</h3>
                {token ? <p>Available: {String(book.available)}</p> : ""}
                
              </div>
            </li>
          ))}
      </ul>
    </div>
        
    </div>
  )
}

export default Profile