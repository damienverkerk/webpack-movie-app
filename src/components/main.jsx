import React, { Component } from "react";
import { Switch, Route } from "react-router-dom";

import Home from "./home/home";
import Movies from "./movies/movies";
import Tickets from "./tickets/tickets";

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
