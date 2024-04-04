import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import axios, { AxiosError } from "axios";
import { useAuth } from "../context/AuthProvider";

const LoginPage = () => {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const { error, setError } = useAuth();
  const navigate = useNavigate();

  const handleLogin = async (e) => {
    e.preventDefault();
    let response;
    try {
      response = await axios.post(`http://localhost:9000/api/login`, {
        username,
        password,
      });
    } catch (error) {
      if (error instanceof AxiosError && error.response?.data) {
        setError(error.response.data);
      } else {
        setError(error.message);
      }
      throw error;
    }
    navigate("/");
    setError(null)
  };
  return (
    <div className="login-container">
      <h1>Login</h1>
      {error && <p className="error">{error}</p>}
      <form onSubmit={handleLogin}>
        <label htmlFor="username">Username</label>
        <input
          type="text"
          onChange={(e) => setUsername(e.target.value)}
        ></input>
        <label htmlFor="password">Password</label>
        <input
          type="password"
          onChange={(e) => setPassword(e.target.value)}
        ></input>
        <button type="submit">Sign In</button>
        <small>
          Don't have an account yet? <Link to={"/register"}>Sign Up</Link>
        </small>
        <small>
          <Link to={"/forgotPassword"}>Forgot your Password?</Link>
        </small>
      </form>
    </div>
  );
};

export default LoginPage;
