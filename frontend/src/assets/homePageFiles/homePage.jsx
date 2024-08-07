import React, { useState } from "react";
import ReactDOM from "react-dom/client";
import "./homePageStyles.css";
import { BsDoorOpenFill } from "react-icons/bs";
import { useNavigate } from "react-router-dom";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

function Home() {
  const navigate = useNavigate();

  const handleLogout = () => {
    toast.info("Logging out!");
    setTimeout(() => {
      localStorage.clear();
      navigate("/login");
    }, 1000);
  };
  return (
    <div>
      <div>
        <ToastContainer
          position="top-right"
          autoClose={500}
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
          <h1 className="title">NOT Leetcode</h1>
        </div>
        <div className="all-buttons">
          <a href="/compiler">
            <button>1&#41; Online Compiler</button>
          </a>
          <a href="/problems">
            <button>2&#41; Problems</button>
          </a>
          <button>3&#41; Profile</button>
          <a href="/about">
            <button>4&#41; About the Project</button>
          </a>
        </div>
        <div>
          <p className="text">Welcome to NOT Leetcode</p>
        </div>
        <BsDoorOpenFill onClick={handleLogout} size={30} className="door" />
      </div>
    </div>
  );
}

export default Home;
