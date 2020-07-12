import React from "react";

import Navigation from "../Navigation";
import Logo from "../Logo";
import { Link } from "gatsby";
import { useIntl } from "gatsby-plugin-intl";

export default function Header({ className, children, title }) {
  const intl = useIntl();
  const locale = intl.locale !== "pt" ? intl.locale : "";
  const headerClass = className || "header";

  return (
    <header className={headerClass}>
      <Logo link={`/${locale}`} />
      <Navigation />
      {children}
      <div className="lang">
        <Link to="/">PT</Link>
        <Link to="/en">EN</Link>
      </div>
    </header>
  );
}
