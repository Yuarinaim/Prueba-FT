import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App.jsx";
import "./index.css";
import axios from "axios";

const { LOCALHOST } = import.meta.env;
axios.defaults.baseURL = LOCALHOST || "https://henry-pf-production-f816.up.railway.app";

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);
// import store from ""; // Asegúrate de crear este archivo
