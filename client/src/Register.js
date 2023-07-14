import React from "react";
import { useState } from "react";
import axios from "axios";
import Form from "./components/Form";
import styled from '@emotion/styled'
import { useNavigate } from "react-router-dom";
import "./App.css"

const Register = () => {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const navigate=useNavigate()
  const onSubmit = async (event) => {
    event.preventDefault();
    try {
      const response = await axios.post("http://localhost:5000/auth/register", {
        username,
        password,
      });
      console.log(response);
      alert("Registration Completed! Now login.");
      navigate("/")

    } catch (error) {
      console.log(error);
    }
  };
  const Tittle = styled.h1`
  text-align:center;
    margin-top:40px;
`

  return (
    <>
      <Tittle>Register</Tittle>
      <Form
        username={username}
        setUsername={setUsername}
        password={password}
        setPassword={setPassword}
        label="Register"
        onSubmit={onSubmit}
      />
    </>
  );
};

export default Register;
