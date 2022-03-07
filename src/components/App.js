import React from "react";
import './App.css';
import Navigation from "./nav/Navigation";
import Jokes from './jokes/Jokes'
import Favourites from './favourites/Favourites'
import { BrowserRouter as Router, Routes, Route } from "react-router-dom"


class App extends React.Component {
  
  render() {
    return (
      <div className="container">
        <Router>
          <Navigation/>
            <Routes>
              <Route path="/" element={<Jokes/>}/>
              <Route path="/saved" element={<Favourites/>}/>
            </Routes>
        </Router>
      </div>
    );
  }
}

export default App;
