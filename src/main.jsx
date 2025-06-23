import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "./index.css";
import App from "./App.jsx";
import UserContext from "./Component/Contextt/UserContext.jsx";

createRoot(document.getElementById("root")).render(
  <UserContext>
    <StrictMode>
      <App></App>
    </StrictMode>
  </UserContext>
);
