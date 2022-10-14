import React, { Component } from "react";
import Navbar from "../Components/NavBar/Navbar";
import Card from "../Components/Card/Card";
import SearchBar from "../Components/SearchBar/SearchBar";
import "./MainPage.css";

export default class MainPage extends Component {
  render() {
    return (
      <div className="Mainpage">
        <div className="Navbar">
          <header>
            <Navbar />
          </header>
          <SearchBar />
        </div>
        <div className="cards">
          <div className="row row-cols g-0 ">
            <Card />
            <Card />
            <Card />
            <Card />
            <Card />
            <Card />
            <Card />
            <Card />
          </div>
        </div>
      </div>
    );
  }
}
