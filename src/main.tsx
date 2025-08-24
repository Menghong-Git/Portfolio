import { createRoot } from "react-dom/client";
import "./index.css";
import AllRoutes from "./Routes";
import { HashRouter } from "react-router";


createRoot(document.getElementById("root")!).render(
    <HashRouter basename="/Portfolio">
      <AllRoutes />
    </HashRouter>
);
