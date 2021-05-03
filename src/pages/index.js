import React from "react";
import {Link} from "gatsby";

import Layout from "../components/Layout";

import "../styles/layout.css";
import {useIntl} from "gatsby-plugin-intl";

export default function Home() {
  const intl = useIntl();
  const locale = intl.locale !== "pt" ? `/${intl.locale}` : "";

  return (
    <Layout title={intl.formatMessage({id: "home"})} className="home">
      <section className="hero">
        <div className="message">
          <h1>Gatsby INTL</h1>
          <p>{intl.formatMessage({id: "slogan"})}</p>
          <Link className="button" to={`${locale}/about`}>
            {intl.formatMessage({id: "about"})}
          </Link>
        </div>
      </section>
    </Layout>
  );
}
