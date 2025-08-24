import { createRoot } from "react-dom/client";
import "./index.css";
import AllRoutes from "./Routes";
import { HashRouter } from "react-router";
import React from "react";

createRoot(document.getElementById("root")!).render(
  <React.StrictMode>
    <HashRouter basename="/Portfolio">
      <AllRoutes />
    </HashRouter>
  </React.StrictMode>
);
