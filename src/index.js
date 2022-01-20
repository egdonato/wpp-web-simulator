import React from "react";
import ReactDOM from "react-dom";
import { SignIn } from "./pages/sign-in";
import reportWebVitals from "./reportWebVitals";
import "./index.css";

ReactDOM.render(
  <React.StrictMode>
    <SignIn />
  </React.StrictMode>,
  document.getElementById("root")
);

reportWebVitals();
