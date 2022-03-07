import React from "react";

class Joke extends React.Component {
  render() {
    return (
      <>
        <div className="card col-sm-3">
          <h5 className="card-title">{this.props.id}</h5>
          <p className="card-text">{this.props.joke}</p>
          <button>Saugoti</button>
        </div>
      </>
    );
  }
}

export default Joke;
