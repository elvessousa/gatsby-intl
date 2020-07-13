import React from "react";
import { Link, graphql } from "gatsby";
import { useIntl, FormattedDate } from "gatsby-plugin-intl";

import Layout from "../components/Layout";

export default function Articles(props) {
  const intl = useIntl();
  const locale = intl.locale !== "pt" ? `/${intl.locale}` : "";
  const posts = props.data.allMarkdownRemark.edges;
  const { numPages } = props.pageContext;
  const filteredPosts = posts.filter((edge) =>
    edge.node.frontmatter.lang.includes(intl.locale)
  );

  return (
    <Layout title={intl.formatMessage({ id: "articles" })}>
      <section className="articles">
        <h1>{intl.formatMessage({ id: "articles" })}</h1>

        {filteredPosts.map(({ node: post }) => (
          <article key={post.id} className="post">
            <Link to={`${locale}/post/${post.frontmatter.slug}`}>
              <h3>{post.frontmatter.title}</h3>
            </Link>
            <time>
              <FormattedDate
                value={new Date(post.frontmatter.date)}
                year="numeric"
                month="long"
                day="2-digit"
              />
            </time>
            <p>{post.excerpt}</p>
          </article>
        ))}

        {numPages > 1 && (
          <div className="pagination">
            {Array.from({ length: numPages }, (_, i) => (
              <Link
                key={`pagination-number${i + 1}`}
                to={`${locale}/articles/${i === 0 ? "" : i + 1}`}
                activeClassName="active"
              >
                {i + 1}
              </Link>
            ))}
          </div>
        )}
      </section>
    </Layout>
  );
}

export const articlesQuery = graphql`
  query articlesQuery($skip: Int!, $limit: Int!) {
    allMarkdownRemark(
      sort: { fields: frontmatter___date, order: DESC }
      limit: $limit
      skip: $skip
    ) {
      edges {
        node {
          id
          excerpt
          frontmatter {
            date
            slug
            title
            lang
          }
        }
      }
    }
  }
`;
