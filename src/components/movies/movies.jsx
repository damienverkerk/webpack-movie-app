import React, { Component } from "react";
import Movie from "./movie";

class Movies extends Component {
  state = {
    movies: [
      {
        id: 1,
        name: "creed",
        image:
          "https://upload.wikimedia.org/wikipedia/en/thumb/2/24/Creed_poster.jpg/220px-Creed_poster.jpg"
      },
      {
        id: 2,
        name: "creed1",
        image: "https://placeimg.com/400/600/any"
      },
      {
        id: 3,
        name: "creed2",
        image: "https://placeimg.com/400/600/any"
      },
      {
        id: 4,
        name: "creed3",
        image: "https://placeimg.com/400/600/any"
      }
    ]
  };
  onAdd = () => {
    console.log("on add");
  };
  onEdit = () => {
    console.log("on edit");
  };
  onDelete = () => {
    console.log("on delete");
  };
  render() {
    return (
      <React.Fragment>
        <div className="row">
          {this.state.movies.map(movie => (
            <Movie
              id={movie.id}
              name={movie.name}
              image={movie.image}
              alt={movie.name}
            />
          ))}
        </div>
      </React.Fragment>
    );
  }
}

export default Movies;
