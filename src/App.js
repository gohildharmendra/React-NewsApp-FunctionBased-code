// import './App.css';
import Navbar from "./components/Navbar";
import React from 'react'
import {BrowserRouter, Routes, Route,} from "react-router-dom";

function App() {
  return (
    <>
    <BrowserRouter>
    <Navbar/>   
    <Routes>
          <Route exact path="/" element={<h1>Hello, Navbar Adding Done</h1>} />
          {/* <Route exact path="/business" element={<News key="business" apiKey={this.apiKey} pageSize={this.pageSize} country="in" category="business"/>} />      
          <Route exact path="/entertainment" element={<News key="entertainment" apiKey={this.apiKey} pageSize={this.pageSize} country="in" category="entertainment"/>} />      
          <Route exact path="/health" element={<News key="health" apiKey={this.apiKey} pageSize={this.pageSize} country="in" category="health"/>} />      
          <Route exact path="/science" element={<News key="science" apiKey={this.apiKey} pageSize={this.pageSize} country="in" category="science"/>} />      
          <Route exact path="/sports" element={<News key="sports" apiKey={this.apiKey} pageSize={this.pageSize} country="in" category="sports"/>} />      
          <Route exact path="/technology" element={<News key="technology" apiKey={this.apiKey} pageSize={this.pageSize} country="in" category="technology"/>} />       */}
        </Routes>
    </BrowserRouter>
    </>
  );
}

export default App;
