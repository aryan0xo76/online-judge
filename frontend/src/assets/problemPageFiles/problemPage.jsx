import React, { useState, useEffect } from "react";
import ReactDOM from "react-dom/client";
import "./problemPageStyles.css";
import axios from "axios";
import { useNavigate } from "react-router-dom";
import { AiFillHome  } from "react-icons/ai";

function Problem() {
  const navigate = useNavigate();
  const [problemList, setProblemList] = useState([]);

  useEffect(() => {
    axios
      .get(
        `${import.meta.env.VITE_BACKEND_URL}/problems`)
      .then((response) => {
        setProblemList(response.data.response);
        // console.log(response.data.response);
      })
      .catch((err) => console.log(err));
  }, []);

  const handleSolve = (index) => {
    navigate("/judge", { state: { index: { index } } });
  };
  
  const handleHome =() =>{
    navigate("/home");
  };

  return (
    <div className="all-details-problem">
      <div>
        <div className="nav-bar">
          <AiFillHome className="home-button" onClick={handleHome}/>
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
        <h1 className="title-problem">
          Problems List: &#40;Click on SOLVE to attempt the problem!&#41;
        </h1>
        <div className="instruction-list">
          <p>
            When adding a problem please make sure to abide by the following
            instructions:-
          </p>
          <ul>
            <li>
              Please provide 1 sample test-case and 5 hidden test-cases for
              strongly checking solutions
            </li>
            <li>
              The time and memory limits are [1 sec] and [256 Mb] respectively
            </li>
          </ul>
        </div>
        <div className="problem-list">
          <ol>
            {problemList.map((problemName, index) => (
              <li key={problemName}>
                {problemName}
                <button onClick={() => handleSolve(index)}>SOLVE</button>
              </li>
            ))}
          </ol>
        </div>
      </div>
    </div>
  );
}

export default Problem;
