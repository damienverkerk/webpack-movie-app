import React, { Component } from "react";
import ReactDOM from "react-dom";
import { BrowserRouter } from "react-router-dom";
import "bootstrap/dist/css/bootstrap.css";

import App from "./components/app";

class Index extends Component {
  render() {
    return (
      <BrowserRouter>
        <App />
      </BrowserRouter>
    );
  }
}
const wrapper = document.getElementById("App");
wrapper ? ReactDOM.render(<Index />, wrapper) : false;
export default Index;
