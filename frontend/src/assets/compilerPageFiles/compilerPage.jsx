import React, { useState } from "react";
import ReactDOM from "react-dom/client";
import "./compilerPageStyles.css";
import axios from "axios";
import MonacoEditor, { Editor } from "@monaco-editor/react";

function compilerPage() {
  const defaultCodeCpp = `
#include <bits/stdc++.h>
using namespace std;
    int main() {
    cout<<"hello NOT Leetcode!";

    return 0;
}`;
  const defaultCodeJava = `
import java.util.*;
class HelloWorld {
    public static void main(String[] args) {
        System.out.print("hello NOT Leetcode in java!");
    }
}`;
  const [language, setLanguage] = useState("cpp");
  const [code, setCode] = useState(defaultCodeCpp);
  const [input, setInput] = useState("");
  const [output, setOutput] = useState("");

  const handleLanguage = (e) => {
    setLanguage(e.target.value);
    if (e.target.value == "cpp") {
      setCode(defaultCodeCpp);
    } else if (e.target.value == "java") {
      setCode(defaultCodeJava);
    }
  };
  const handleRun = async () => {
    console.log(code);
    console.log(input);
    console.log(language);
    const payload = {
      //good practice to setup payloads
      language,
      code,
      input,
    };

    try {
      const data = await axios.post("http://localhost:8800", payload);
      console.log(data);
      setOutput(data.data.output);
    } catch (error) {
      console.log(error.valueq);
    }
  };
  return (
    <div className="all-details-compiler">
      <div>
        <select onChange={(e) => handleLanguage(e)}>
          <option value="cpp">C++</option>
          <option value="java">Java</option>
        </select>
      </div>
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
        <button onClick={handleRun} className="run-button-comp">
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
