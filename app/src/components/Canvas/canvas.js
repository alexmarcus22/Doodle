import React, { Component } from "react";
import { CanvasPage } from "../../pages/Canvas/canvas";

export class Canvas extends Component {
  render() {
    return (
      <section className="draw-component">
        {/* <Header /> */}
        <CanvasPage />
      </section>
    );
  }
}
