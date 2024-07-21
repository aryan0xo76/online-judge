import React, { useState } from "react";
import ReactDOM from "react-dom/client";
import "./compilerPageStyles.css";
import axios from "axios";
import MonacoEditor, { Editor } from "@monaco-editor/react";

function compilerPage() {
  const defaultCode = `
#include <bits/stdc++.h>
using namespace std;
    int main() {
    cout<<"hello NOT Leetcode! ";

    return 0;
}`;
  const [code, setCode] = useState(defaultCode);
  const [input, setInput] = useState("");
  const [output, setOutput] = useState("");

  const handleRun = async () => {
    // console.log(code);
    const payload = {
      //good practice to setup payloads
      language: "cpp",
      code,
      input,
    };

    try {
      const data = await axios.post("http://localhost:8800", payload);
      // console.log(data);
      setOutput(data.data.output);
    } catch (error) {
      // console.log(error.response);
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
        <MonacoEditor
          value={code}
          onChange={(e) => setCode(e)}
          className="code-box"
          height="400px"
          width="622px"
          options={{
            fontSize: 17,
          }}
          theme="hc-light"
          defaultLanguage="cpp"
        />
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
