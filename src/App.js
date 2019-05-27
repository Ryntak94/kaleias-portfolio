import React from "react";
import "./App.css";
import "styled-components";
import { Route } from "react-router-dom";
import Home from "./components/Home.js";
import Nav from "./components/Nav.js";

function App() {
  return (
    <div className="App">
      <Route path="/" render={props => <Nav {...props} />} />
      <Route exact path="/" render={props => <Home {...props} />} />
    </div>
  );
}

export default App;
