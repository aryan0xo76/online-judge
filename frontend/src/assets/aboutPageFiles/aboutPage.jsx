import React from "react";
import ReactDOM from "react-dom/client";
import "./aboutPageStyles.css";

function About() {
  return (
    <div className="all-details-about">
      <div>
        <p>Hello,</p>
        <p>
          This project is a fully working Online Judge with the following
          features:-
        </p>
        <ul>
          <li>Complete authentication of user including login and register</li>
          <li>
            A working compiler supporting the language C++. (more to
            be added)
          </li>
          <li>CRUD ops to add, edit, delete problems in a problem set.</li>
          <li>
            Use the problem set to run a working judge with a built-in compiler
            which returns a verdict according to a problem in the problem set.
          </li>
        </ul>
      </div>
    </div>
  );
}

export default About;
