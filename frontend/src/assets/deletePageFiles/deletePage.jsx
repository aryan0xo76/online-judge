import React, { useState } from "react";
import ReactDOM from "react-dom/client";
import "./deletePageStyles.css";

function DeleteProblem() {
  const [problem_name, setProblem_name] = useState();
  return (
    <div className="all-details-delete">
      <div className="nav-bar-delete">
        <a href="/problems">
          <button>Problem List</button>
        </a>
        <a href="/addproblem">
          <button>Add a problem</button>
        </a>
        <a href="/updateproblem">
          <button>Edit a problem</button>
        </a>
        <a href="/deleteproblem">
          <button>Delete a problem</button>
        </a>
      </div>
      <div className="delete-problem-all">
        <h1>Delete a problem</h1>
        <div>
          <p>Please the enter the Problem you would like to DELETE</p>
          <input onChange={(e) => setProblem_name(e.target.value)}></input>
        </div>
        <button >DELETE</button>
      </div>
    </div>
  );
}

export default DeleteProblem;
