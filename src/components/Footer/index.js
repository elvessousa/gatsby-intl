import React from "react";

import Navigation from "../Navigation";

export default function Footer({ className, children }) {
  const footerClass = className || "footer";

  return (
    <footer className={footerClass}>
      <div className="footer-content">
        <Navigation />
        {children}
      </div>
    </footer>
  );
}
