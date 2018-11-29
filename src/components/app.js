import React, { Component } from "react";
import Movies from "./movies";
import NavBar from "./navbar";

class App extends Component {
  state = {};
  render() {
    return (
      <React.Fragment>
        <NavBar />
        <div className="container-fluid">
          <div className="row">
            <Movies />
          </div>
        </div>
      </React.Fragment>
    );
  }
}

export default App;
