import React from "react";
import { Link } from "gatsby";

export default function Layout({ className, children, title }) {
  const navClass = className || "navigation";

  return (
    <nav className={navClass}>
      <ul>
        <li>
          <Link to="/">Home</Link>
        </li>
        <li>
          <Link to="/blog">Blog</Link>
        </li>
        <li>
          <Link to="/about">About</Link>
        </li>
      </ul>
    </nav>
  );
}
