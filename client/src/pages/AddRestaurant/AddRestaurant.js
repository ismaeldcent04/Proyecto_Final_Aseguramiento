import React, { Component } from "react";
import Navbar from "../../Components/NavBar/Navbar";
import "./AddRestaurant.css";

export default class AddRestaurant extends Component {
  render() {
    return (
      <div className="Mainpage">
        <div className="Navbar">
          <header>
            <Navbar />
          </header>
        </div>
        <div class="content">
          <div class="container">
            <div class="row align-items-stretch no-gutters contact-wrap">
              <div class="col-md-12">
                <div class="form h-100">
                  <h3>Add Restaurant</h3>
                  <form
                    class="mb-5"
                    method="post"
                    id="contactForm"
                    name="contactForm"
                  >
                    <div class="row">
                      <div class="col-md-6 form-group mb-3">
                        <label for="" class="col-form-label">
                          Restaurant Name *
                        </label>
                        <input
                          type="text"
                          class="form-control"
                          name="name"
                          id="name"
                          placeholder="ex. Pizza-Hut"
                        />
                      </div>
                    </div>

                    <div class="row">
                      <div class="col-md-12 form-group mb-3">
                        <label for="budget" class="col-form-label">
                          Rating
                        </label>
                        <select class="custom-select" id="budget" name="budget">
                          <option selected>Choose...</option>
                          <option>5 stars</option>
                          <option>4 stars</option>
                          <option>3 stars</option>
                          <option>2 stars</option>
                          <option>1 star</option>
                        </select>
                      </div>
                    </div>

                    <div class="row">
                      <div class="col-md-12 form-group mb-3">
                        <label for="message" class="col-form-label">
                          Description *
                        </label>
                        <textarea
                          class="form-control"
                          name="message"
                          id="message"
                          cols="30"
                          rows="4"
                          placeholder="Write description for restaurant"
                        ></textarea>
                      </div>
                    </div>
                    <div class="row">
                      <div class="col-md-12 form-group">
                        <input
                          type="submit"
                          value="Add Restaurant"
                          class="btn btn-primary rounded-0 py-2 px-4"
                        />
                      </div>
                    </div>
                  </form>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }
}
