import React from "react";

const Footer = () => {
  const year = new Date().getFullYear();
  return (
    <footer style={{ textAlign: "center", padding: "1em 0", background: "#000", color: "#fff" }}>
      <p>&copy; {year} Your Name. All Rights Reserved.</p>
    </footer>
  );
};

export default Footer;