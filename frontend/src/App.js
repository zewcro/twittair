import React from "react";
import Home from "./Components/Home";
import Login from "./Components/Login";
import Register from "./Components/Register";
import Explorer from "./Components/Explorer";

import { BrowserRouter as Router, Route, Switch } from "react-router-dom";

import "./Styles/App.css";
import TwitBox from "./Components/Twit_Box";

function App() {
  return (
    <div className="App">
      <Router>
        <Switch>
          
          <Route path="/login">
            <Login />
          </Route>

          <Route path="/register">
            <Register />
          </Route>

          <Route path="/home">
            <Home />
          </Route>

          <Route path="/explorer"> 
            <Explorer />
          </Route>

          <Route path="/">
            <Login />
          </Route>

        </Switch>
      </Router>
    </div>
  );
}

export default App;
