import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App.jsx";
import "./index.css";
import { BrowserRouter } from "react-router-dom";
import InputValueProvider from "./components/context/InputValueProvider.jsx";

ReactDOM.createRoot(document.getElementById("root")).render(
  <InputValueProvider>
    <BrowserRouter>
      <App />
    </BrowserRouter>
  </InputValueProvider>
);
