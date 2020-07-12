import React from "react";
import { graphql } from "gatsby";

import Layout from "../components/Layout";
import { changeLocale } from "gatsby-plugin-intl";
import { useEffect } from "react";

export default function Post({ data }) {
  const { html, frontmatter: post } = data.markdownRemark;

  useEffect(() => {
    if (post.lang !== "pt") {
      changeLocale(post.lang);
    }
  }, [post.lang]);

  return (
    <Layout title={post.title}>
      <article className="post-content">
        <h1>{post.title}</h1>
        <div className="post-text" dangerouslySetInnerHTML={{ __html: html }} />
      </article>
    </Layout>
  );
}

export const pageQuery = graphql`
  query PostQuery($slug: String!) {
    markdownRemark(frontmatter: { slug: { eq: $slug } }) {
      html
      frontmatter {
        date
        slug
        title
        lang
      }
      timeToRead
    }
  }
`;
