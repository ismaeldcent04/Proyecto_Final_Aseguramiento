import React from "react";
import "react-bootstrap";
import "./App.css";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Login from "./Components/Pages/Auth/Login";
import SignUp from "./Components/Pages/Auth/SignUp";
import Home from "./Components/Pages/Home/Home";

function App() {
  return (
    <Router>
      <div className="app">
        <div className="App-header">
          <div className="auth-inner">
            <Routes>
              <Route exact path="/" element={<Login />} />
              <Route path="/sign-up" element={<SignUp />} />
              <Route path="/home" element={<Home />} />
            </Routes>
          </div>
        </div>
      </div>
    </Router>
  );
}
export default App;
