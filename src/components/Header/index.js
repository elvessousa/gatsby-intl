import React from "react";

import Navigation from "../Navigation";

export default function Layout({ className, children, title }) {
  const headerClass = className || "header";

  return (
    <header className={headerClass}>
      <Navigation />
      {children}
    </header>
  );
}
