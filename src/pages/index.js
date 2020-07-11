import React from "react";
import { Link } from "gatsby";

import Layout from "../components/Layout";

import "../styles/layout.css";

export default function Home() {
  return (
    <Layout title="Início" className="home">
      <section className="hero">
        <h1>Teum!</h1>
        <Link to="/about">About</Link>
      </section>
    </Layout>
  );
}
