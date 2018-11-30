import React, { Component } from "react";
import { Switch, Route } from "react-router-dom";

import Home from "./home";
import Movies from "./movies";
import Tickets from "./tickets";

class Main extends Component {
  state = {};
  render() {
    return (
      <div className="row">
        <Switch>
          <Route exact path="/" component={Home} />
          <Route path="/movies" component={Movies} />
          <Route path="/tickets" component={Tickets} />
        </Switch>
      </div>
    );
  }
}

export default Main;
