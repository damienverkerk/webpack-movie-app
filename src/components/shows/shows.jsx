import React, { Component } from "react";
import Show from "./show";

class Shows extends Component {
  /* TODO: Shows vast hangen aan de movie van toepassing als button zodat 
  als er op geklikt worden dan word er een movie id en een show id meegeven en de tickets van de show worden weergegeven
  */
  state = {
    shows: [
      {
        movieId: 1,
        timeOfShow: ["01:00", "03:00"]
      },
      {
        movieId: 2,
        timeOfShow: ["01:00", "03:00"]
      },
      {
        movieId: 3,
        timeOfShow: ["01:00", "03:00"]
      },
      { movieId: 4, timeOfShow: ["01:00", "03:00"] },
      { movieId: 5, timeOfShow: ["01:00", "03:00"] },
      { movieId: 6, timeOfShow: ["01:00", "03:00"] }
    ]
  };
  sortShowsByMovieId = i => {
    const id = i;
    if (id) {
      const show = this.state.shows.filter(show => show.movieId === id);
      const showTimes = show[0].timeOfShow;
      console.log(showTimes);
      return <Show shows={showTimes} />;
    } else {
      return (
        <Show
          shows={
            <div>
              <p>No shows for this movie.</p>
            </div>
          }
        />
      );
    }
  };
  render() {
    console.log(this.props);
    return this.sortShowsByMovieId(this.props.id);
  }
}

export default Shows;
