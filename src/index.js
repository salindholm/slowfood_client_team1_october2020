import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import * as serviceWorker from './serviceWorker';
import axios from "axios";
import './assets/stylesheet.css'
import "semantic-ui-css/semantic.min.css";
import { BrowserRouter } from 'react-router-dom';

axios.defaults.baseURL = "https://slowfood-revisarik-api.herokuapp.com/";

ReactDOM.render(
  <BrowserRouter>
    <App />
  </BrowserRouter>,
  document.getElementById('root')
);

serviceWorker.unregister();
