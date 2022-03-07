import React from "react";
import Joke from "../joke/Joke";

class Favourites extends React.Component {
  constructor() {
    super();
    this.state = {
      savedList: [],
    };
  }
  componentDidMount() {
    if (localStorage.length) {
      this.setState((state) => ({
        savedList:state.savedList.concat(
          JSON.parse(localStorage.getItem("favouriteJokes"))
        ),
      }));
    }
  }
  
  render() {
    if (this.state.savedList.length) {
      return (
        <>
          <h2>Saved jokes list</h2>
          <div className="row">
            {this.state.savedList.map((joke) => (
              <Joke
              key={joke.id}
              id={joke.id}
              joke={joke.joke}
              />
            ))}
          </div>
        </>
      );
    } else {
      return (
        <div className="saved">
          <p>Išsaugotų bajerių nėra</p>
        </div>
      );
    }
  }
}

export default Favourites;
