import React from "react";
import ReactDOM from "react-dom/client";
import { useState } from "react";
import Register from "./assets/registerPageFiles/registerPage.jsx"
import Login from "./assets/loginPageFiles/loginPage.jsx"
import Home from "./assets/homePageFiles/homePage.jsx"
// import "./App.css";
import {Route,Routes, BrowserRouter} from 'react-router-dom'


function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path='/register' element = {<Register/>}></Route>
        <Route path='/login' element = {<Login/>}></Route>
        <Route path='/home' element = {<Home/>}></Route>
      </Routes>
    </BrowserRouter>

  );
}

export default App;
