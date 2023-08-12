import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import App from "./App";
import { BrowserRouter } from "react-router-dom";
import SessionContextProvider from "./contexts/SessionContext";
import DataContextProvier, { DataContext } from "./contexts/DataContext";

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <BrowserRouter>
    <SessionContextProvider>
      <DataContextProvier>
        <App />
      </DataContextProvier>
    </SessionContextProvider>
  </BrowserRouter>
);
