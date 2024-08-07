import React, { useState } from "react";
import ReactDOM from "react-dom/client";
import "./deletePageStyles.css";
import { AiFillHome } from "react-icons/ai";
import axios from "axios";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

function DeleteProblem() {
  const [problem_name, setProblem_name] = useState();

  const handleDelete = async () => {
    const payload = {
      problem_name,
    };
    try {
      const { data } = await axios.post(
        `${import.meta.env.VITE_BACKEND_URL}/deleteproblem`,
        payload
      );
      toast.success("Deleted problem successfully!");
      // console.log(data);
    } catch (error) {
      const toastMessage = error.response.data.message;
      toast.error(toastMessage);
    }
  };
  const handleHome = () => {
    navigate("/home");
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
      <div className="all-details-delete">
        <div className="nav-bar-delete">
          <AiFillHome className="home-button" onClick={handleHome} />
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
          <button onClick={handleDelete}>DELETE</button>
        </div>
      </div>
    </div>
  );
}

export default DeleteProblem;
