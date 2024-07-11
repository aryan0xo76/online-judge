import React, { useState } from "react";
import ReactDOM from "react-dom/client";
import "./editPageStyles.css";

function EditProblems() {
  return (
    <div className="all-details-edit">
      <div className="buttons-edit">
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
    </div>
  );
}

export default EditProblems;
