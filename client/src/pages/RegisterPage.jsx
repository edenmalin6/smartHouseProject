import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import axios, { AxiosError } from "axios";
import { useAuth } from "../context/AuthProvider";

const RegisterPage = () => {
  const [email, setEmail] = useState("");
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");
  const { error, setError } = useAuth();
  const navigate = useNavigate();

  const CreateUser = async (e) => {
    e.preventDefault();
    if(password !== confirmPassword) {
      setError("One of the password you entered is in incorrect.")
      throw error
    }
    setError(null)
    let response;
    try {
      response = await axios.post(`http://localhost:9000/api/register`, {
        email,
        username,
        password,
      });
    } catch (error) {
      if (error instanceof AxiosError && error.response?.data){
        setError(error.response.data)
      }
      else{
        setError(error.message)
      }
      console.log(response);
      throw error
      
    }
    navigate("/login")
    setError(null)
  };
  return (
    <div className="register-container">
      <h1>Register</h1>
      {error && <p className="error">{error}</p>}
      <form onSubmit={CreateUser}>
        <label htmlFor="email">Email</label>
        <input
          type="text"
          //   required
          onChange={(e) => setEmail(e.target.value)}
        ></input>
        <label htmlFor="username">Username</label>
        <input
          type="text"
          //   required
          onChange={(e) => setUsername(e.target.value)}
        ></input>
        <label htmlFor="password">Password</label>
        <input
          type="password"
          onChange={(e) => setPassword(e.target.value)}
          //   required
          min={2}
          max={15}
        ></input>
        <label htmlFor="confirm-password">Confirm Password</label>
        <input
          type="password"
          onChange={(e) => setConfirmPassword(e.target.value)}
        //   required
          min={2}
          max={15}
        ></input>
        <button type="submit">Sign Up</button>
        <small>
          Already have an account? <Link to={"/login"}>Sign In</Link>
        </small>
      </form>
    </div>
  );
};

export default RegisterPage;
