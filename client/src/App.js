import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap-icons/font/bootstrap-icons.css";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Login from "./Components/Auth/Login";
import SignUp from "./Components/Auth/SignUp";
import MainPage from "./pages/MainPage";
import AddRestaurant from "./pages/AddRestaurant/AddRestaurant";
function App() {
  return (
    <Router>
      <Routes>
        <Route exact path="/" element={<Login />} />
        <Route path="/sign-up" element={<SignUp />} />
        <Route path="/home" element={<MainPage />} />
        <Route path="/add-restaurant" element={<AddRestaurant />} />
      </Routes>
    </Router>
  );
}
export default App;
