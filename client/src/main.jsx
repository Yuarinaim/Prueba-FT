import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App.jsx";
import "./index.css";
import axios from "axios";

const { LOCALHOST } = import.meta.env;
axios.defaults.baseURL = "https://prueba-ft-production.up.railway.app" || LOCALHOST;

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);
// import store from ""; // Asegúrate de crear este archivo
