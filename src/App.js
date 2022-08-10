// import './App.css';
import React from 'react'
import Navbar from "./components/Navbar";
import {BrowserRouter, Routes, Route,} from "react-router-dom";
function App() {
  const envVariable = process.env.REACT_APP_ENV_VAR
  console.log(envVariable)
  return (
    <>
    <BrowserRouter>
    <Navbar/>   
    <Routes>
          <Route exact path="/" element={<h1>Hello, Navbar Adding Done</h1>} />
        </Routes>
    </BrowserRouter>
    </>
  );
}

export default App;
