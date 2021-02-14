import React, { Component } from "react";
import { Link, BrowserRouter as Router, Route, Switch } from "react-router-dom";

export class Home extends Component {
  render() {
    return (
      <section className="home-component">
        {/* <Header /> */}
        <div className="hero-component d-flex justify-content-center align-items-center w-100">
          <h1 className="title">Start Drawing</h1>
          <Link to="/canvas" className="btn btn-primary">Go to doodle</Link>
        </div>
      </section>
    );
  }
}
