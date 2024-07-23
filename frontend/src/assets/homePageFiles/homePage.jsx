import React, { useState } from "react";
import ReactDOM from "react-dom/client";
import "./homePageStyles.css";
import { BsDoorOpenFill } from "react-icons/bs";
import { useNavigate } from "react-router-dom";

function Home() {
  const navigate = useNavigate();

  const handleLogout = () => {
    localStorage.clear();
    navigate("/login");
  };
  return (
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
  );
}

export default Home;
