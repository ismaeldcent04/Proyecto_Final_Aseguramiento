import React from "react";
import "./NavBar.css";

function Navbar() {
  return (
    <div className="navbar">
      <div className="app_logo">
        <h2>Restaurants🍳</h2>
      </div>
      <div className="searchbar">
        <input type="text" placeholder="Restaurants" />
        <input type="text" placeholder="Location" />
        <button></button>
      </div>
    </div>
  );
}
export default Navbar;
