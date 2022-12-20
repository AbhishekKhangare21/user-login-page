import React from "react";
import ReactDOM from "react-dom/client";
import "../node_modules/bootstrap/dist/css/bootstrap.min.css";
import "./index.css";
import App from "./App";
import axios from "axios";

axios.defaults.baseURL = "https://localhost:8000/";

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(<App />);
