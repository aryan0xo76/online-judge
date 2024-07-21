import React from "react";
import Register from "./assets/registerPageFiles/registerPage.jsx"
import Login from "./assets/loginPageFiles/loginPage.jsx"
import Home from "./assets/homePageFiles/homePage.jsx"
import Compiler from "./assets/compilerPageFiles/compilerPage.jsx"
import Problems from "./assets/problemPageFiles/problemPage.jsx"
import AddProblem from "./assets/addPageFiles/addPage.jsx"
import UpdateProblem from "./assets/updatePageFiles/updatePage.jsx"
import DeleteProblem from "./assets/deletePageFiles/deletePage.jsx"
import Judge from "./assets/judgePageFiles/judgePage.jsx"
import About from "./assets/aboutPageFiles/aboutPage.jsx"
// import Start from "./assets/startbad.jsx"
// import EditProblems from "./assets/editPageFilesbad/editPage.jsx"

// import DeleteProblem from "./assets/deletePageFiles/deletePage.jsx"
// import UpdateProblem from "./assets/updatePageFiles/updatePage.jsx"
// import "./App.css";
import {Route,Routes, BrowserRouter} from 'react-router-dom'



function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path = '/'  element={<Login/>}></Route>
        <Route path='/register' element = {<Register/>}></Route>
        <Route path='/login' element = {<Login/>}></Route>
        <Route path='/home' element = {<Home/>}></Route>
        <Route path='/compiler' element = {<Compiler/>}></Route>
        <Route path='/problems' element = {<Problems/>}></Route>
        {/* <Route path='/editproblems' element = {<EditProblems/>}></Route> */}
        <Route path='/addproblem' element = {<AddProblem/>}></Route>   
        <Route path='/updateproblem' element = {<UpdateProblem/>}></Route>     
        <Route path='/deleteproblem' element = {<DeleteProblem/>}></Route> 
        <Route path='/judge' element = {<Judge/>}></Route>
        
        <Route path='/about' element = {<About/>}></Route>

      </Routes>
    </BrowserRouter>

  );
}

export default App;
