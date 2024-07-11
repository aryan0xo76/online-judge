import React, { useState } from "react";
import ReactDOM from "react-dom/client";
import "./addPageStyles.css";

function AddProblem() {
  return (
    <div className="all-details-add">
      <div className="nav-bar-add">
      <a href="/problems">
          <button >Problem List</button>
        </a>
        <a href="/addproblem">
          <button >Add a problem</button>
        </a>
        <a href="/updateproblem">
          <button >Edit a problem</button>
        </a>
        <a href="/deleteproblem">
          <button >Delete a problem</button>
        </a>
      </div>
    </div>
  );
}

export default AddProblem;
