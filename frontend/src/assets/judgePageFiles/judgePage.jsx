import React, { useState, useEffect } from "react";
import "./judgePageStyles.css";
import axios from "axios";
import { useNavigate, useLocation } from "react-router-dom";
import MonacoEditor, { Editor } from "@monaco-editor/react";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

function Judge() {
  const { state } = useLocation();
  const { index = "0" } = state; // Read values passed on state

  const [problem_name, setProblem_name] = useState();
  const [problem_description, setProblem_description] = useState();
  const [sample_input_tests, setSample_input_tests] = useState();
  const [sample_output_tests, setSample_output_tests] = useState();
  const [hidden_input_tests, setHidden_input_tests] = useState([]);
  const [hidden_output_tests, setHidden_output_tests] = useState([]);

  const [verdict, setVerdict] = useState("");
  const [color, setColor] = useState("black");

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
  const defaultCodeJS = `
  console.log("Hello Not Leetcode in JavaScript!");`;
    const defaultCodePython = `
  print("Hello Not Leetcode in Python!")`;
  const [language, setLanguage] = useState("cpp");
  const [code, setCode] = useState(defaultCodeCpp);
  const [input, setInput] = useState("");
  const [output, setOutput] = useState("");
  //   response.data.response[index.index]
  // console.log();

  useEffect(() => {
    axios
      .get(`${import.meta.env.VITE_BACKEND_URL}/judge`)
      .then((response) => {
        console.log(response);
        setProblem_name(response.data.response[index.index].problem_name);
        setProblem_description(
          response.data.response[index.index].problem_description
        );
        setSample_input_tests(response.data.response[index.index].input_tests);
        setSample_output_tests(
          response.data.response[index.index].output_tests
        );
        setInput(response.data.response[index.index].input_tests.toString());
        setHidden_input_tests(
          response.data.response[index.index].hidden_input_tests
        );
        setHidden_output_tests(
          response.data.response[index.index].hidden_output_tests
        );
        // console.log(sample_output_tests);
      })
      .catch((err) => console.log(err));
  }, []);

  const handleRun = async () => {
    const payload = {
      //good practice to setup payloads
      language,
      code,
      input,
    };
    // console.log(payload);

    try {
      const response = await axios.post("http://3.111.181.184:8800/judge", payload);
      // console.log(sample_output_tests.toString());
      console.log(response.data.response);
      setOutput(response.data.response);
    } catch (error) {
      // console.log(error.response);
    }
  };

  const TLE = () => {
    toast.error("Time limit Exceeded!");
  };

  const handleJudge = async () => {
    const timeout = setTimeout(TLE, 15000);
    const payload = {
      language,
      code,
      input,
    };
    // console.log(payload);

    let response = await axios.post("http://3.111.181.184:8800/judge", payload);
    if (response.data.response.trim() != sample_output_tests.trim()) {
      clearTimeout(timeout);
      toast.error("Wrong answer on sample test case");
      
    } else {
      // if(hidden_input_tests.size()!=0)
      for (let i = 0; i < hidden_input_tests.length; i++) {
        const input = hidden_input_tests[i];
        const payload = {
          language,
          code,
          input,
        };
        response = await axios.post("http://3.111.181.184:8800/judge", payload);

        //if you reach here then the code has successfully ran without tle so remove "timout"
        if (response.data.response.trim() != hidden_output_tests[i].trim()) {
          clearTimeout(timeout);
          toast.error(`Wrong answer on hidden test case ${i + 1}`);
        }
      }
      clearTimeout(timeout);
      toast.success("Accepted!");
    }
  };
  const handleLanguage = (e) => {
    // console.log(1);
    setLanguage(e.target.value);
    if (e.target.value == "cpp") {
      setCode(defaultCodeCpp);
    } else if (e.target.value == "java") {
      setCode(defaultCodeJava);
    }else if (e.target.value == "python") {
      setCode(defaultCodePython);
    }else if (e.target.value == "javascript") {
      setCode(defaultCodeJS);
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
      <div className="all-details-compiler">
        <div className="title-1">
          <div className="problem-details">
            <h1 value={problem_name}>{problem_name}</h1>
            <p>{problem_description}</p>
          </div>
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
            className="code-sinput-soutput"
            placeholder="Write your input here"
          ></textarea>
          <textarea
            //   value={sample_output_tests[0]}
            value={sample_output_tests}
            className="code-sinput-soutput"
            placeholder="Sample output here"
          ></textarea>
        </div>

        <p className="ci-headings">
          <span>CODE</span>
          <span>SAMPLE INPUT</span>
          <span>SAMPLE OUTPUT</span>
        </p>

        <div>
          <button onClick={handleRun} className="run-button-judge">
            Run
          </button>
          <select className="languages" onChange={(e) => handleLanguage(e)}>
          
          <option value="cpp">C++</option>
          <option value="java">Java</option>
          <option value="python">Python</option>
          <option value="javaScript">JavaScript</option>
          </select>
        </div>
        <div>
          <p className="title-2">OUTPUT</p>
          <textarea
            placeholder="Output here"
            value={output}
            className="output-text"
          ></textarea>
        </div>
        <div className="verdict-stuff">
          <button onClick={handleJudge}>SUBMIT</button>
        </div>
      </div>
    </div>
  );
}
export default Judge;
