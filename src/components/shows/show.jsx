import React, { Component } from "react";

class Show extends Component {
  state = {};
  render() {
    return (
      <div>
        <p>Choose a time</p>
        <ul className="list-group list-group-flush">
          {this.props.shows.map(show => (
            <li className="btn btn-secondary m-2">{show}</li>
          ))}
        </ul>
      </div>
    );
  }
}

export default Show;
