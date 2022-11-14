import React from "react";
import ReactDOM from "react-dom/client";
import "bootstrap/dist/css/bootstrap.min.css";
import "./assets/css/animate.min.css";
import "./assets/scss/light-bootstrap-dashboard-react.scss?v=2.0.0";
import "./assets/css/demo.css";
import "./assets/css/custom.css";
import "@fortawesome/fontawesome-free/css/all.min.css";
import App from "App";
import axios from 'axios'

axios.defaults.headers.common['Authorization'] = 'Bearer '+localStorage.getItem('token');

const root = ReactDOM.createRoot(document.getElementById("root"));

root.render(
  <App />
);
