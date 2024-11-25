import React from "react";
import ReactDOM from "react-dom/client";

import { Provider } from "react-redux";
import store from "./components/store";

import Navbar from "./components/Navigator/navbar";
// As of React 18
const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <Provider store={store}>
    <Navbar />
  </Provider>
);
