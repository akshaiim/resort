import React, { Component } from "react";

import { Route, Switch } from "react-router-dom";
import Home from "./pages/Home";
import Rooms from "./pages/Rooms";
import Singleroom from "./pages/Singleroom";
import Error from "./pages/Error";

function App() {
  return (
    <React.Fragment>
      <Switch>
        <Route path="/" component={Home} exact />
        <Route component={Error} />
      </Switch>
    </React.Fragment>
  );
}

export default App;
