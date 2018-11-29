import React, { Component } from "react";
import ReactDOM from "react-dom";
import App from "./components/app";
import "bootstrap/dist/css/bootstrap.css";

class Index extends Component {
  render() {
    return (
      <div>
        <App />
      </div>
    );
  }
}
const wrapper = document.getElementById("App");
wrapper ? ReactDOM.render(<Index />, wrapper) : false;
export default Index;
