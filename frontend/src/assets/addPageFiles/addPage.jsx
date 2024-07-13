import React, { useState } from "react";
import ReactDOM from "react-dom/client";
import "./addPageStyles.css";
import axios from "axios";

// {(() => { // immediately invoked fucntionexpression (IIFE) [very helpful]
//   if (hidden_input_tests.length == 0) {
//     return <button onClick={handleAdd}>Add a hidden test-case</button>;
//   }
// })()}

function AddProblem() {
  const [problem_name, setProblem_name] = useState();
  const [problem_description, setProblem_description] = useState();
  const [input, setInput] = useState();
  const [output, setOutput] = useState();
  const [input_tests, setInput_tests] = useState([]);
  const [output_tests, setOutput_tests] = useState([]);

  const handleAdd = () => {
    if (input.trim() !== "" && output.trim() !== "") {
      setInput_tests((i) => [...i, input]);
      setOutput_tests((o) => [...o, output]);
      setInput("");
      setOutput("");
    }
  };
  const handleDelete = (index) => {
    const new_input_tests = input_tests.filter((_, i) => i != index);
    setInput_tests(new_input_tests);
    const new_output_tests = output_tests.filter((_, i) => i != index);
    setOutput_tests(new_output_tests);
  };

  const handleUp = (index) => {
    if (index !== 0) {
      const new_input_tests = [...input_tests];
      const new_output_tests =
        ([...output_tests][
          (new_input_tests[index], new_input_tests[index - 1])
        ] =
        [new_input_tests[index - 1], new_input_tests[index]][
          (new_input_tests[index], new_input_tests[index - 1])
        ] =
          [new_input_tests[index - 1], new_input_tests[index]]);
      setInput_tests(new_input_tests);
      setOutput_tests(new_output_tests);
    }
  };
  const handleDown = (index) => {
    if (index !== input_tests.length - 1) {
      const new_input_tests = [...input_tests];
      const new_output_tests =
        ([...output_tests][
          (new_input_tests[index], new_input_tests[index + 1])
        ] =
        [new_input_tests[index + 1], new_input_tests[index]][
          (new_input_tests[index], new_input_tests[index + 1])
        ] =
          [new_input_tests[index + 1], new_input_tests[index]]);
      setInput_tests(new_input_tests);
      setOutput_tests(new_output_tests);
    }
  };
  
  const  handleFinalAdd= async ()=>{
    const size = input_tests.length;
    const sample_inputs = input_tests[0];
    const sample_outputs = output_tests[0];
    const hidden_input_tests = input_tests.slice(1,size);
    const hidden_output_tests = output_tests.slice(1,size);

    const payload = {
      problem_name,
      problem_description,
      sample_inputs,
      sample_outputs,
      hidden_input_tests,
      hidden_output_tests,
    };
    setProblem_name("");
    setProblem_description("");
    setInput_tests([]);
    setOutput_tests([]);

    console.log(payload);

    try {
      const {data} = await axios.post(
        "http://localhost:8000/addproblem",
        payload,
      );
      console.log(data);
      alert("Added problem successfully!");
    } catch (error) {
      console.log(error.response);
    }
  };
 

  return (
    <div className="all-details-add">
      <div className="nav-bar-add">
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
      <div className="text-box-1">
        <textarea value ={problem_name} onChange={(e)=>setProblem_name(e.target.value)} placeholder="Write the problem name here"></textarea>
        <textarea value = {problem_description} onChange={(e)=>setProblem_description(e.target.value)} placeholder="Write the problem description here"></textarea>
      </div>
      <p className="advice">
        [Test case #1 will be treated as the sample test case and the rest will
        be hidden test cases]
      </p>
      <p className="advice">(add atleast 1 hidden test case)</p>
      <div className="text-box-2">
        <textarea
          value={input}
          onChange={(e) => setInput(e.target.value)}
          placeholder="Write input of test case"
        ></textarea>
        <textarea
          value={output}
          onChange={(e) => setOutput(e.target.value)}
          placeholder="Write output of test case"
        ></textarea>
        <span>
          <button className="add-button" onClick={handleAdd}>
            Add test case
          </button>
        </span>
      </div>
      <div className="all-test-cases">
        <ol>
          {input_tests.map((it, index) => (
            <li key={index}>
              <div>
                <span className="tcs">TC:{index+1} &#8198;INPUT: &#8198; {input_tests[index]}</span>
                <br></br>
                <span className="tcs">TC:{index+1} &#8198;OUTPUT: &#8198;{output_tests[index]}</span>
                <br></br>

                <button
                  className="delete-button"
                  onClick={() => handleDelete(index)}
                >
                  Delete
                </button>
                <button className="up-button" onClick={() => handleUp(index)}>
                  ⬆️
                </button>
                <button
                  className="down-button"
                  onClick={() => handleDown(index)}
                >
                  ⬇️
                </button>
              </div>
            </li>
          ))}
        </ol>
      </div>
      <button onClick={handleFinalAdd} className="final-button">ADD PROBLEM</button>
    </div>
    
  );
  
}

export default AddProblem;
