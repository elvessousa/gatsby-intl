import React from "react";
import { Link } from "gatsby";
import { useIntl } from "gatsby-plugin-intl";

export default function Layout({ className }) {
  const intl = useIntl();
  const locale = intl.locale !== "pt" ? `/${intl.locale}` : "";
  const navClass = className || "navigation";

  return (
    <nav className={navClass}>
      <ul>
        <li>
          <Link activeClassName="active" to={`${locale}/`}>
            {intl.formatMessage({ id: "home" })}
          </Link>
        </li>
        <li>
          <Link activeClassName="active" to={`${locale}/articles/`}>
            {intl.formatMessage({ id: "articles" })}
          </Link>
        </li>
        <li>
          <Link activeClassName="active" to={`${locale}/about`}>
            {intl.formatMessage({ id: "about" })}
          </Link>
        </li>
      </ul>
    </nav>
  );
}
