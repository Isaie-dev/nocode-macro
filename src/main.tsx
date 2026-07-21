//import react
import React from "react";
import ReactDOM from "react-dom/client";
//import App function
import App from "./App";

//create the app
ReactDOM.createRoot(document.getElementById("root") as HTMLElement).render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
);
