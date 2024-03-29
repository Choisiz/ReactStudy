import React from "react";
import ReactDOM from "react-dom/client";
import AppJSX from "./AppJSX";
import { Provider } from "react-redux";
import store from "./store";
const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    <Provider store={store}>
      <AppJSX />
    </Provider>
  </React.StrictMode>
);
