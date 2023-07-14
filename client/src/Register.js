import React from "react";
import { useState } from "react";
import axios from "axios";
import Form from "./components/Form";
import styled from "@emotion/styled";
import { useNavigate } from "react-router-dom";
import { useCookies } from "react-cookie";
import "./App.css";
import Login from "./LogIn";

const Register = () => {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [_, setCookies] = useCookies(["access-token"]);
  const navigate = useNavigate();
  const onSubmit = async (event) => {
    event.preventDefault();
    try {
      const response = await axios.post("http://localhost:5000/auth/register", {
        username,
        password,
      });
      console.log(response);
      if (response.data.username === username) {
        setCookies("access-token", response.data.token);
        window.localStorage.setItem("EmPa token", response.data.token);
        alert("Registration Completed! ");
        navigate("/add");
      } else {
        alert("If you already have  account please login");
        navigate("/Login");
      }
    } catch (error) {
      console.log(error);
    }
  };

  const Tittle = styled.h1`
    text-align: center;
    margin-top: 40px;
  `;

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
