import React, { Component } from "react";
import Movie from "./movie";

class Movies extends Component {
  state = {
    movies: [
      {
        id: 1,
        name: "creed",
        image:
          "https://upload.wikimedia.org/wikipedia/en/thumb/2/24/Creed_poster.jpg/220px-Creed_poster.jpg",
        tickets: 12
      },
      {
        id: 2,
        name: "creed1",
        image: "https://placeimg.com/400/600/any",
        tickets: 5
      },
      {
        id: 3,
        name: "creed2",
        image: "https://placeimg.com/400/600/any",
        tickets: 3
      },
      {
        id: 4,
        name: "creed3",
        image: "https://placeimg.com/400/600/any",
        tickets: 27
      }
    ]
  };
  render() {
    return (
      <React.Fragment>
        {this.state.movies.map(movie => (
          <Movie
            key={movie.key}
            name={movie.name}
            image={movie.image}
            alt={movie.name}
            tickets={movie.tickets}
          />
        ))}
      </React.Fragment>
    );
  }
}

export default Movies;
