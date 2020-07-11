import React from "react";

import Navigation from "../Navigation";

export default function Layout({ className, children, title }) {
  const footerClass = className || "footer";

  return (
    <footer className={footerClass}>
      <Navigation />
      {children}
    </footer>
  );
}
