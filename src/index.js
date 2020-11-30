import React from "react";
import ReactDOM from "react-dom";
import App from "./App";
import * as serviceWorker from "./serviceWorker";
import axios from "axios";
import "./assets/stylesheet.css";
import "semantic-ui-css/semantic.min.css";
import { BrowserRouter } from "react-router-dom";

let apiUrl;

if (process.env.NODE_ENV === "production") {
  apiUrl = "https://slowfood-revisarik-api.herokuapp.com/api/";
} else {
  apiUrl = "http://localhost:3000/api/";
}
axios.defaults.baseURL = apiUrl;

ReactDOM.render(
  <BrowserRouter>
    <App />
  </BrowserRouter>,
  document.getElementById("root")
);

serviceWorker.unregister();
