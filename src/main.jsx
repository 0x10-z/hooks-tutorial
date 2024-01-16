import React from "react";
import ReactDOM from "react-dom/client";
import { WithCallback, WithMemo, WithEffect } from "./App.jsx";
import "./index.css";

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <WithEffect />
    <hr />
    <WithCallback />
    <hr />
    <WithMemo />
    <hr />
  </React.StrictMode>
);
