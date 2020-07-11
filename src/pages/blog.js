import React from "react";
import { Link } from "gatsby";

import Layout from "../components/Layout";

export default function Home() {
  return (
    <Layout title="Início" className="home">
      <section className="articles">
        <h1>Blog</h1>
        <Link to="/about">About</Link>
      </section>
    </Layout>
  );
}
