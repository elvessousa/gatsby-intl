import React from "react";
import { Link } from "gatsby";

export default function Logo({ link }) {
  const href = link || "/";

  return (
    <Link to={href} className="logo">
      <img src="/svg/logo.svg" alt="logo" />
    </Link>
  );
}
