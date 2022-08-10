// import './App.css';
import React from 'react'
import News from './components/News';
import Navbar from "./components/Navbar";
import {BrowserRouter, Routes, Route,} from "react-router-dom";
function App() {
  const pageSize = 9
  const apiKey=process.env.REACT_APP_NEWS_KEY
  return (
    <>
    <BrowserRouter>
    <Navbar/>   
    <Routes>
          <Route exact path="/" element={<News key="general" apiKey={apiKey} pageSize={pageSize} country="in" category="general"/>} />
          <Route exact path="/business" element={<News key="business" apiKey={apiKey} pageSize={pageSize} country="in" category="business"/>} />      
          <Route exact path="/entertainment" element={<News key="entertainment" apiKey={apiKey} pageSize={pageSize} country="in" category="entertainment"/>} />      
          <Route exact path="/health" element={<News key="health" apiKey={apiKey} pageSize={pageSize} country="in" category="health"/>} />      
          <Route exact path="/science" element={<News key="science" apiKey={apiKey} pageSize={pageSize} country="in" category="science"/>} />      
          <Route exact path="/sports" element={<News key="sports" apiKey={apiKey} pageSize={pageSize} country="in" category="sports"/>} />      
          <Route exact path="/technology" element={<News key="technology" apiKey={apiKey} pageSize={pageSize} country="in" category="technology"/>} />      
        </Routes>
    </BrowserRouter>
    </>
  );
}

export default App;
