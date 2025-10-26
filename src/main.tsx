import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App";

const styles: React.CSSProperties = {
  fontFamily: "system-ui, sans-serif",
  background: "#f7fafc",
  minHeight: "100vh",
  margin: 0,
  padding: 0,
};

ReactDOM.createRoot(document.getElementById("root")!).render(
  <React.StrictMode>
    <div style={styles}>
      <App />
    </div>
  </React.StrictMode>
);