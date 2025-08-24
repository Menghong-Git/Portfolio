import { createRoot } from "react-dom/client";
import "./index.css";
import { BrowserRouter } from "react-router";
import AllRoutes from "./Routes";

createRoot(document.getElementById("root")!).render(
  <BrowserRouter>
    <AllRoutes />
  </BrowserRouter>
);
