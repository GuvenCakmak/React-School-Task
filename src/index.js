import React from "react";
import ReactDOM from "react-dom";
import App from "./App";
import "bootstrap/dist/css/bootstrap.min.css";
import { Provider } from "@lyket/react";

ReactDOM.render(
  <>
    <Provider apiKey="[pt_b426e0d04f8e63e62e419b09deae8f]">
      <App />
    </Provider>
  </>,
  document.getElementById("root")
);
