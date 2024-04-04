import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import axios from "axios";

const ForgotPassword = () => {
  const [email, setEmail] = useState("");
  const navigate = useNavigate();

  const handleSendEmail = (e) => {
    e.preventDefault();
    axios
      .post(`http://localhost:9000/forgotPassword`, { email })
      .then((res) => {
        console.log(res);
        if (res.status === 200) {
          alert("Please check your Email to reset password.");
          navigate("/login");
        }
      })
      .catch((err) => {
        alert(err.message);
        console.log(err);
      });
  };

  return (
    <div className="forgot-pass-container">
      <h1>Forgot Password</h1>
      <form onSubmit={handleSendEmail}>
        <label htmlFor="username">Email</label>
        <input type="email" onChange={(e) => setEmail(e.target.value)}></input>
        <button type="submit">Send</button>
      </form>
    </div>
  );
};

export default ForgotPassword;
