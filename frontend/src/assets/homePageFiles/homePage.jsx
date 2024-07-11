import React, { useState } from "react";
import ReactDOM from "react-dom/client";
import "./homePageStyles.css";

function Home() {
  return (
    <div className="all-details">
      <div>
        <h className="title">NOT Leetcode</h>
      </div>
      <div className="all-buttons">
        <a href="/compiler">
          <button>1&#41; Online Compiler</button>
        </a>
        <a href="/problems">
        <button>2&#41; Problems</button>
        </a>
        <button>3&#41; Profile</button>
        <button>4&#41; About the Project</button>
      </div>
      <div>
        <p className="text">Welcome to NOT Leetcode</p>
      </div>
    </div>
  );
}

export default Home;
