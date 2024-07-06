import React from "react";
import ReactDOM from "react-dom/client";
import "./loginPageStyles.css";

function Login() {
  return (
    <div className="all-details">
      <div>
        <h1 className="login">Login</h1>
      </div>
      <div>
        <p className="text">Email</p>
        <input
          className="input-box"
          type="text"
          placeholder="Your email here"
        ></input>
      </div>
      <div>
        <p className="text">Password</p>
        <input
          className="input-box"
          type="password"
          placeholder="Your password here"
        ></input>
      </div>
      <div>
        <div className="make-account">Make an account?</div>
        <div className="lsButtons">
        <a href="/register">
          <button>Register</button>
        </a>
          <button>Submit</button>
        </div>
      </div>
    </div>
  );
}

export default Login;
