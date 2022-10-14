<<<<<<< HEAD
import React from "react";
import "../node_modules/bootstrap/dist/css/bootstrap.min.css";
import "./App.css";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Login from "./Components/Pages/Auth/Login";
import SignUp from "./Components/Pages/Auth/SignUp";
=======
import React from 'react'
import 'react-bootstrap'
import './App.css'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import Login from './Components/Pages/Auth/Login'
import SignUp from './Components/Pages/Auth/SignUp'
>>>>>>> df1122e20727fcab47cb6729ca5ac68798ccb909

function App() {
  return (
    <Router>
      <div className="app">
        <div className="App-header">
          <div className="auth-inner">
            <Routes>
              <Route exact path="/" element={<Login />} />
              <Route path="/sign-up" element={<SignUp />} />
            </Routes>
          </div>
        </div>
      </div>
    </Router>
  );
}
export default App;
