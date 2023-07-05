import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App.jsx";
import "./index.scss";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import BreweryView from "./components/BreweryView/BreweryView.jsx";

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<App />} />
        <Route path="/breweries/:name" element={<BreweryView />} />
      </Routes>
    </BrowserRouter>
  </React.StrictMode>
);
