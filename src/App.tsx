import React from "react";
import Hero from "./components/Hero";

const appStyles: React.CSSProperties = {
  minHeight: "100vh",
  background: "linear-gradient(135deg, #f8fafc 0%, #e0e7ef 100%)",
  fontFamily: "'Inter', system-ui, sans-serif",
  color: "#1a202c",
  display: "flex",
  flexDirection: "column",
  alignItems: "center",
};

const footerStyles: React.CSSProperties = {
  marginTop: "auto",
  padding: "2rem 0 1rem 0",
  fontSize: "1rem",
  color: "#64748b",
  letterSpacing: "0.01em",
  textAlign: "center",
};

function App() {
  return (
    <div style={appStyles}>
      <Hero />
      <footer style={footerStyles}>
        &copy; {new Date().getFullYear()} Your Name &mdash; Web Developer
      </footer>
    </div>
  );
}

export default App;