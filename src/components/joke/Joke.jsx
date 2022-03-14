import React from "react";
import './joke.css'
let favouritesList = []

class Joke extends React.Component {
    constructor() {
        super();
        this.handleAddFavourites = this.handleAddFavourites.bind(this)
      }
      handleAddFavourites(){
          let obj = {}
          obj['id']=this.props.id;
          obj['joke']=this.props.joke
          obj['categories']=[]
          favouritesList.push(obj);
          localStorage.setItem('favouriteJokes', JSON.stringify(favouritesList))
      }
  render() {
    
    return (
      <>
        <div className="card col-sm-3 align-items-center align-self-end">
          <h5 className="card-title">{this.props.id}</h5>
          <p className="card-text">{this.props.joke}</p>
          <button className="btn btn-primary" onClick={this.handleAddFavourites}>Saugoti</button>
        </div>
      </>
    );
  }
}

export default Joke;
