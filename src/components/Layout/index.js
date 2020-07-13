import React from "react";
import { Helmet } from "react-helmet";

import Header from "../Header";
import Footer from "../Footer";
import { useIntl } from "gatsby-plugin-intl";

export default function Layout({ className, children, title }) {
  const intl = useIntl();
  return (
    <main className={className}>
      <Helmet>
        <html lang={intl.locale} />
        <meta charSet="utf-8" />
        <title>{title}</title>
        <meta name="description" content="A Gatsby multilingual site" />
      </Helmet>
      <Header />
      {children}
      <Footer>
        <p>Elves Sousa - 2020</p>
      </Footer>
    </main>
  );
}
