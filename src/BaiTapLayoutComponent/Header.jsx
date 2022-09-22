import React, { Component } from "react";

export default class Header extends Component {
  render() {
    return (
      <div className="header bg-dark">
        <div className="navbar px-5">
          <a href="" className="text-white text-decoration-none fs-5 px-5">
            Start Bootstrap
          </a>
          <div className="nav px-5">
            <a href="" className="text-white text-decoration-none p-2">
              Home
            </a>
            <a href="" className="about text-secondary text-decoration-none p-2">
              About
            </a>
            <a href="" className="contact text-secondary text-decoration-none p-2">
              Contact
            </a>
          </div>
        </div>
      </div>
    );
  }
}
