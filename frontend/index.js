import React, { StrictMode } from "react";
import ReactDOM from "react-dom/client";
import App from "./src/App";

const rootElement = document.getElementById("root");
const root = ReactDOM.createRoot(rootElement);
root.render(
    <StrictMode>
        <App />
    </StrictMode>
);
