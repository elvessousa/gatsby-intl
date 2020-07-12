import React from "react";
import { Helmet } from "react-helmet";

import Header from "../Header";
import Footer from "../Footer";

export default function Layout({ className, children, title }) {
  return (
    <main className={className}>
      <Helmet>
        <title>{title}</title>
      </Helmet>
      <Header />
      {children}
      <Footer>
        <p>Elves Sousa - 2020</p>
      </Footer>
    </main>
  );
}
