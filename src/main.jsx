import React from "react";
import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import App from "./App.jsx";
import "./index.css";
import { BrowserRouter } from "react-router-dom";
import { ContextProvider } from "./context/index.jsx";
import { reducer, initialState } from "./context/reducer.js";

createRoot(document.getElementById("root")).render(
   <StrictMode>
      <BrowserRouter>
         <ContextProvider initialState={initialState} reducer={reducer}>
            <App />
         </ContextProvider>
      </BrowserRouter>
   </StrictMode>
);
