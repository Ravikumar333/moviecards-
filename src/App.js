import React from 'react';
import Calculator from './Calculator/Calculator.jsx';
import Movies from './Movies/Movies.jsx';
//import Login from './Movies/Login.js';
import { BrowserRouter as Router, Route, Link } from "react-router-dom";

function App() {
  return (
    <div className="App">
      hai
      <hr />
      <div className="router">
        <Router>
          <div className="links">

            <Link to="/Movies">Movies</Link><br />
            <Link to="/Calculator">Calculator</Link><br />
            <Link to="/hai">hai</Link>


            <hr />
          </div>
          <Route path="/Movies" component={Movies} />
          <Route path="/Calculator" component={Calculator} />

        </Router>

      </div>
    </div>

  );

}

export default App;
