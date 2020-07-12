const path = require("path");

exports.createPages = async ({ actions, graphql, reporter }) => {
  const { createPage } = actions;
  const blogPostTemplate = path.resolve("src/templates/blog-post.js");
  const query = await graphql(`
    query {
      allMarkdownRemark {
        edges {
          node {
            frontmatter {
              date
              slug
              lang
              title
            }
          }
        }
      }
    }
  `);

  if (query.errors) {
    reporter.panicOnBuild("Error while running GraphQL query.");
  }

  // Post template pages and context
  query.data.allMarkdownRemark.edges.forEach(({ node }) => {
    createPage({
      path: `/post/${node.frontmatter.slug}`,
      component: blogPostTemplate,
      context: {
        slug: node.frontmatter.slug,
      },
    });
  });

  // Articles template pages and context
  const posts = query.data.allMarkdownRemark.edges;
  const postsPerPage = 20;
  const numPages = Math.ceil(posts.length / postsPerPage);

  Array.from({ length: numPages }).forEach((_, i) => {
    createPage({
      path: i === 0 ? "/articles" : `/articles/${i + 1}`,
      component: path.resolve("src/templates/articles.js"),
      context: {
        limit: postsPerPage,
        skip: i * postsPerPage,
        numPages,
        currentPage: i + 1,
      },
    });
  });
};
