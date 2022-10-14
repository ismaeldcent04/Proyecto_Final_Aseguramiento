import React , { Component } from "react";
import "./NavbarStyle.css"

export default class Navbar extends Component {
    render() {

        return(

      <nav class="navbar navbar-dark bg-dark">
      <div class="container-fluid">
        <a href = "/home"class="navbar-brand"> <i class="bi bi-bookmark-star"></i>Restaurant Review</a>
        <a href = "/add-restaurant" class="navbar container-sm">Add Restaurant</a>
        <form class="d-flex">
          <a class="btn" href="/"> 
            <i class="bi bi-box-arrow-left"></i> Log out
          </a>
        </form>
      </div>
    </nav>

  )
 }
}