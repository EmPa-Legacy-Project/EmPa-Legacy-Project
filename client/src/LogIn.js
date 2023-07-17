import React from "react";
import { useState, } from "react";
import axios from "axios";
import Form from "./components/Form";
import styled from "@emotion/styled";
import "./App.css";
import { useCookies } from "react-cookie";
import { useNavigate } from "react-router-dom";

function Login({token, setToken}) {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [_, setCookies] = useCookies(["access-token"]);
  const navigate = useNavigate();

  const onSubmit = async (event) => {
    event.preventDefault();
    try {
      const response = await axios.post("http://localhost:5000/auth/login", {
        username,
        password,
      });
      if (response.data.token) {
        setCookies("access-token", response.data.token);
        window.localStorage.setItem("EmPa token", response.data.token);
        console.log(token)
        navigate(-1);
      } else {
        alert("If you don't have  account please signup");
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
      <Tittle>Login</Tittle>
      <Form
        username={username}
        setUsername={setUsername}
        password={password}
        setPassword={setPassword}
        label="Login"
        onSubmit={onSubmit}
      />
    </>
  );
}
export default Login;
