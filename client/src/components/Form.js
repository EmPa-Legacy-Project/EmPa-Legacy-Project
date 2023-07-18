import React from "react";
import Link from "@mui/material/Link";
function Form({
  username,
  setUsername,
  password,
  setPassword,
  label,
  onSubmit,
}) {
  return (
    <div className="auth-container">
      <form onSubmit={onSubmit}>
        <h2>{label}</h2>
        <div className="form-group">
          <label htmlFor="username">Username: </label>
          <input
            type="text"
            id="username"
            value={username}
            onChange={(event) => setUsername(event.target.value)}
          />
        </div>
        <div className="form-group">
          <label htmlFor="password">Password: </label>
          <input
            type="password"
            id="password"
            value={password}
            onChange={(event) => setPassword(event.target.value)}
          />
        </div>
        <button type="submit" className="">
          {label}
        </button>{" "}
        {label == "Login" ? (
          <Link href="http://localhost:3000/register" variant="body2">
            {"Don't have an account? Register"}
          </Link>
        ) : (
          <Link href="http://localhost:3000/login" variant="body2">
            {"Do you have an account? login"}
          </Link>
        )}
      </form>
    </div>
  );
}

export default Form;
