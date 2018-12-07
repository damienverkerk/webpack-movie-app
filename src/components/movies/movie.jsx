import React, { Component } from "react";

import Shows from "../shows/shows";

class Movie extends Component {
  render() {
    return (
      <div className="card col-sm-2 mt-3" id={this.props.id}>
        <img
          src={this.props.image}
          alt={this.props.alt}
          className="card-img-top"
        />
        <div className="card-body">
          <h1 className="card-title">{this.props.name}</h1>
          <span className="card-text">
            <Shows id={this.props.id} />
          </span>
        </div>
      </div>
    );
  }
}

export default Movie;
