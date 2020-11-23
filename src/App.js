import React, { Component } from "react";

import { Route, Switch } from "react-router-dom";
import Home from "./pages/Home";
import Rooms from "./pages/Rooms";
import Singleroom from "./pages/Singleroom";
import Error from "./pages/Error";
import Navbar from "./components/Navbar";
import "./App.css"

function App() {
  return (
    <React.Fragment>
      <Navbar/>
      <Switch>
        <Route path="/" component={Home} exact />
        <Route exact path="/rooms/" component={Rooms} />
        <Route exact path="/rooms/:slug" component={Singleroom} />
        <Route component={Error} />
      </Switch>
    </React.Fragment>
  );
}

export default App;
