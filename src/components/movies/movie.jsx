import React, { Component } from "react";

class Movie extends Component {
  render() {
    console.log(this.props);
    return (
      <div className="card col-sm-2">
        <img
          src={this.props.image}
          alt={this.props.alt}
          className="card-img-top"
        />
        <div className="card-body">
          <span className="card-text">
            <h1>{this.props.name}</h1>
            <p>Currently there are {this.props.tickets} tickets left</p>
          </span>
        </div>
      </div>
    );
  }
}

export default Movie;
