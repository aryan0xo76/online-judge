import React, { useState, useEffect } from "react";
import ReactDOM from "react-dom/client";
import "./problemPageStyles.css";
import axios from "axios";
import { useNavigate } from "react-router-dom";
import { AiFillHome } from "react-icons/ai";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

function Problem() {
  const navigate = useNavigate();
  const [problemList, setProblemList] = useState([]);

  useEffect(() => {
    axios
      .get(`${import.meta.env.VITE_BACKEND_URL}/problems`)
      .then((response) => {
        setProblemList(response.data.response);
        // console.log(response.data.response);
      })
      .catch((err) => console.log(err));
  }, []);

  const handleSolve = (index) => {
    navigate("/judge", { state: { index: { index } } });
  };

  const handleHome = () => {
    navigate("/home");
  };

  const handleAdminCheck = (e) => {
    const isAdmin = localStorage.getItem("admin");
    if (isAdmin == "true") {
      navigate(`/${e.target.value}`);
    } else {
      toast.error("This feature is for Admins only!");
    }
  };
  return (
    <div>
      <div>
        <ToastContainer
          position="top-right"
          autoClose={2000}
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
      <div className="all-details-problem">
        <div>
          <div className="nav-bar">
            <AiFillHome className="home-button" onClick={handleHome} />

            <button
              value="problems"
              onClick={() => {
                navigate("/problems");
              }}
            >
              Problem List
            </button>

            <button value="addproblem" onClick={(e) => handleAdminCheck(e)}>
              Add a problem
            </button>

            <button value="updateproblem" onClick={(e) => handleAdminCheck(e)}>
              Edit a problem
            </button>

            <button value="deleteproblem" onClick={(e) => handleAdminCheck(e)}>
              Delete a problem
            </button>
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
    </div>
  );
}

export default Problem;
