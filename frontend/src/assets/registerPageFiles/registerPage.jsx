import React, { useState } from "react";
import ReactDOM from "react-dom/client";
import "./registerPageStyles.css";
import axios from "axios";
import { useNavigate } from "react-router-dom";

function Register() {
  const [firstname, setFirstname] = useState("");
  const [lastname, setLastname] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const navigate = useNavigate(); 

  const handleSubmit = (e) => {
    e.preventDefault();
    axios.post(
      `${import.meta.env.VITE_BACKEND_URL}/register`, { firstname, lastname, email, password })
      .then((result) =>  {
        // console.log(result);
        
        localStorage.setItem("login", true);
        navigate('/home');
      })
      .catch((err) => console.log(err));
  };

  return (
    <div className="all-details">
      <div>
        <h1 className="register">Register</h1>
      </div>
      <div>
        <p className="text">First Name</p>
        <input
          className="input-box"
          type="text"
          placeholder="Your first name here"
          onChange={(e) => setFirstname(e.target.value)}
        ></input>
      </div>
      <div>
        <p className="text">Last Name</p>
        <input
          className="input-box"
          type="text"
          placeholder="Your last name here"
          onChange={(e) => setLastname(e.target.value)}
        ></input>
      </div>
      <div>
        <p className="text">Email</p>
        <input
          className="input-box"
          type="text"
          placeholder="Your email here"
          onChange={(e) => {
            setEmail(e.target.value);
          }}
        ></input>
      </div>
      <div>
        <p className="text">Password</p>
        <input
          className="input-box"
          type="password"
          placeholder="Your password here"
          onChange={(e) => setPassword(e.target.value)}
        ></input>
      </div>
      <div className="alreadyR">Already registered?</div>
      <div className="lsButtons">
        <a href="/login">
          <button>Login</button>
        </a>
        <button onClick={handleSubmit}>Submit</button>
      </div>
    </div>
  );
}

export default Register;
