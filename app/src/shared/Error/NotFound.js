import React, { Component } from "react";
import { ReactComponent as Logo } from "../../logo.svg";
import { Header } from "../Header/header"

export class NotFound extends Component {
  render() {
    return (
      <section>
        <div className="hero-component d-flex justify-content-center align-items-center w-100">
          404 - Not found
        </div>
      </section>
    );
  }
}
