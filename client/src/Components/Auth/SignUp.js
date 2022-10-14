import React, { Component, useState } from "react";
import axios from "axios";
import "./AuthStyle.css";

function SignUp() {
  const [firstname, setFirstName] = useState("");
  const [lastname, setLastName] = useState("");
  const [email, setemail] = useState("");
  const [password, setpassword] = useState("");

  function handleFname(event) {
    setFirstName(event.target.value);
  }
  function handleLName(event) {
    setLastName(event.target.value);
  }
  function handleEmail(event) {
    setemail(event.target.value);
  }
  function handlepassword(event) {
    setpassword(event.target.value);
  }
  function userRegister(event) {
    event.preventDefault();
    var usuario = {
      firstName: firstname,
      lastName: lastname,
      email: email,
      password: password,
    };
    console.log(usuario);
    axios
      .post("/api/restaurant/sign-up", usuario)
      .then((res) => {
        alert(res.data);
      })
      .then((err) => {
        console.log(err);
      });
  }

  return (
    <form>
      <div className="App-header">
        <div className="auth-inner">
          <h3>Sign Up</h3>
          <div className="mb-3">
            <label>First name</label>
            <input
              value={firstname}
              type="text"
              className="form-control"
              placeholder="First name"
              name="firstName"
              onChange={handleFname}
            />
          </div>
          <div className="mb-3">
            <label>Last name</label>
            <input
              value={lastname}
              type="text"
              className="form-control"
              placeholder="Last name"
              name="lastName"
              onChange={handleLName}
            />
          </div>
          <div className="mb-3">
            <label>Email address</label>
            <input
              value={email}
              type="email"
              className="form-control"
              placeholder="Enter email"
              name="email"
              onChange={handleEmail}
            />
          </div>
          <div className="mb-3">
            <label>Password</label>
            <input
              value={password}
              type="password"
              className="form-control"
              placeholder="Enter password"
              name="password"
              onChange={handlepassword}
            />
          </div>
          <div className="d-grid">
            <button
              onClick={userRegister}
              type="submit"
              className="btn btn-primary"
            >
              Sign Up
            </button>
          </div>
          <p className="forgot-password text-right">
            Already registered <a href="/">Sign in</a>
          </p>
        </div>
      </div>
    </form>
  );
}
export default SignUp;
