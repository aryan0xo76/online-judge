import React, { useState } from "react";
import ReactDOM from "react-dom/client";
import "./compilerPageStyles.css";
import axios from "axios";

function compilerPage() {
  const defaultCode = `
#include <iostream>
using namespace std;
    int main() {
    cout<<"hello NOT Leetcode! ";

    return 0;
}`;
  const [code, setCode] = useState(defaultCode);
  const [input, setInput] = useState("");
  const [output, setOutput] = useState("");

  const handleRun = async () => {
    const payload = {
      //good practice to setup payloads
      language: "cpp",
      code,
      input,
    };

    try {
      const { data } = await axios.post(
        "http://localhost:8000/compiler",
        payload
      );
      console.log(data);
      setOutput(data.output);
    } catch (error) {
      console.log(error.response);
    }
  };

  return (
    <div className="all-details-compiler">
      <div className="title-1">
        <p>
          CODE
          &#8198;&#8198;&#8198;&#8198;&#8198;&#8198;&#8198;&#8198;&#8198;&#8198;&#8198;
          &#8198;&#8198;&#8198;&#8198;&#8198;&#8198;&#8198;&#8198;&#8198;&#8198;&#8198;
          &#8198;&#8198;&#8198;&#8198;&#8198; INPUT
        </p>
      </div>
      <div className="ci-boxes">
        <textarea
          value={code}
          onChange={(e) => setCode(e.target.value)}
          className="code-box"
          placeholder="Write your code here"
        ></textarea>
        <textarea
          value={input}
          onChange={(e) => setInput(e.target.value)}
          className="input-box-compiler"
          placeholder="Write your input here"
        ></textarea>
      </div>
      <div>
        <button onClick={handleRun} className="run-button">
          Run
        </button>
      </div>
      <div>
        <p className="title-2">OUTPUT</p>
        <textarea
          placeholder="Output here"
          value={output}
          className="output-text"
        ></textarea>
      </div>
    </div>
  );
}

export default compilerPage;
