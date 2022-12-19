import React from "react";
import Home from "./Components/Home";
import Login from "./Components/Login";
import Register from "./Components/Register";
import Explorer from "./Components/Explorer";

import { BrowserRouter as Router, Route, Switch } from "react-router-dom";

import "./Styles/App.css";
import TwitBox from "./Components/Twit_Box";
import Notifications from "./Components/Notifications";
import Profil from "./Components/Profil";
import Messages from "./Components/Messages";

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

          <Route path="/notifications">
            <Notifications />
          </Route>

          <Route path="/messages">
            <Messages />
          </Route>

          <Route path="/profil">
            <Profil />
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
