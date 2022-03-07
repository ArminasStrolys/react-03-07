import React from "react";
import Jokes from '../jokes/Jokes'
import Favourites from '../favourites/Favourites'
import {BrowserRouter as Router, Routes, Route} from "react-router-dom"
import Navigation from "../nav/Navigation";

class App extends React.Component {
  render() {
    return (
      <div className="container">
        <Router>
          <Navigation>
            <Routes>
              <Route path="/" element={<Jokes/>}></Route>
              <Route path="saved" element={<Favourites/>}></Route>
            </Routes>
          </Navigation>
        </Router>
      </div>
    );
  }
}

export default App;
