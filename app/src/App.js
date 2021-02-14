import React, { Component } from "react";
import logo from "./logo.svg";
import "./App.css";
import "./sass/global.scss";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import { Home } from "./pages/Home/home";
import { Canvas } from "./components/Canvas/canvas";
import { NotFound } from "./shared/Error/NotFound";

export default function App() {
  return (
    <Router>
      <Switch>
        <Route path="/" exact component={Home} />
        <Route path="/canvas" exact component={Canvas} />
        <Route path="*">
          <NotFound />
        </Route>
      </Switch>
    </Router>
  );
}
