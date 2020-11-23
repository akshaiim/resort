import React from "react";
import ReactDOM from "react-dom";
import { BrowserRouter } from "react-router-dom";
import {RoomProvider} from "./context"

import App from "./App";

ReactDOM.render(
  <RoomProvider>
  <BrowserRouter>
    <App />
  </BrowserRouter>
  </RoomProvider>,
  document.getElementById("root")
);
