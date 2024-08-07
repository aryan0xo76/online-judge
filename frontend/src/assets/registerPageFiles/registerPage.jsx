import React, { useState } from "react";
import ReactDOM from "react-dom/client";
import "./registerPageStyles.css";
import axios from "axios";
import { useNavigate } from "react-router-dom";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

function Register() {
  const [firstname, setFirstname] = useState("");
  const [lastname, setLastname] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const navigate = useNavigate();

  const handleSubmit = (e) => {
    e.preventDefault();
    axios
      .post(`${import.meta.env.VITE_BACKEND_URL}/register`, {
        firstname,
        lastname,
        email,
        password,
      })
      .then((response) => {
        console.log(response);
        if (response.data.success == true) {
          toast.success("You have successfully registered!");
          setTimeout(() => {
            localStorage.setItem("login", true);
            navigate("/home");
          }, 1500);
        }
      })
      .catch((err) => {
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
    </div>
  );
}

export default Register;
