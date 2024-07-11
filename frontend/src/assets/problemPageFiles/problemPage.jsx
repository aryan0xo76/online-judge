import React, { useState } from "react";
import ReactDOM from "react-dom/client";
import "./problemPageStyles.css";

function Problem() {
  const [problemList, setProblemList] = useState(["hello", "bruh moment"]);
  return (
    <div className="all-details-problem">
      <div>
      <div className="nav-bar">
        <a href="/problems">
          <button className="add-problem">Problem List</button>
        </a>
        <a href="/addproblem">
          <button className="add-problem">Add a problem</button>
        </a>
        <a href="/updateproblem">
          <button className="add-problem">Edit a problem</button>
        </a>
        <a href="/deleteproblem">
          <button className="add-problem">Delete a problem</button>
        </a>
      </div>
        <h className="title-problem">
          Problems List: &#40;Click on problem to attempt!&#41;
        </h>
        <div className="instruction-list">
          <p>
            When adding a problem please make sure to abide by the following
            instructions:-
          </p>
          <ul>
            <li>
              Please provide atleast 5 test-cases for strongly checking
              solutions
            </li>
            <li>
              The time and memory limits are [1 sec] and [256 Mb] respectively
            </li>
          </ul>
        </div>
        <div className="problem-list">
          <ol>
            {problemList.map((problemName, index) => (
              <li>{problemName}</li>
            ))}
          </ol>
        </div>
      </div>
    </div>
  );
}

export default Problem;
