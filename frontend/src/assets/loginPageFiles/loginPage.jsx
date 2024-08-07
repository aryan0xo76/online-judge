import React from "react";
import ReactDOM from "react-dom/client";
import "./loginPageStyles.css";
import { useState } from "react";
import { useNavigate } from "react-router-dom";
import axios from "axios";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

function Login() {
  const [email, setEmail] = useState();
  const [password, setPassword] = useState();
  const navigate = useNavigate();

  const handleSubmit = (e) => {
    e.preventDefault();
    axios
      .post(`${import.meta.env.VITE_BACKEND_URL}/login`, { email, password })
      .then((result) => {
        // console.log(result);
        if (result.data == "You are logged in!") {
          toast.success("Logging in!");
          setTimeout(() => {
            localStorage.setItem("login", true);
            if (email == "admin") {
              localStorage.setItem("admin", true);
            }
            navigate("/home");
          }, 1000);
        }
      })
      .catch((err) => {
        //   console.log(result.response);
        const toastMessage = err.response.data.message;
        toast.error(toastMessage);
      });
  };

  return (
    <div>
      <div>
        <ToastContainer
          position="top-right"
          autoClose={1000}
          limit={1}
          hideProgressBar={false}
          newestOnTop={false}
          closeOnClick
          rtl={false}
          pauseOnFocusLoss
          draggable
          pauseOnHover
          theme="colored"
          transition:Bounce
        />
      </div>
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
            onChange={(e) => setEmail(e.target.value)}
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
        <div>
          <div className="make-account">Make an account?</div>
          <div className="lsButtons">
            <a href="/register">
              <button>Register</button>
            </a>
            <button onClick={handleSubmit}>Submit</button>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Login;
