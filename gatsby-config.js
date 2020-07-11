module.exports = {
  /* Your site config here */
  siteMetadata: {
    title: "Dois Pontos",
    siteUrl: "https://blog.elvessousa.com.br",
    description: "Dois pontos: tecnologia, tutoriais, design, opinião.",
    author: "Elves Sousa",
    portfolio: "https://elvessousa.com.br",
    social: {
      github: "elvessousa",
      twitter: "twitter",
      fbid: "0",
      linkedIn: "elvessousa",
    },
  },
  plugins: [
    {
      resolve: "gatsby-source-filesystem",
      options: {
        path: `${__dirname}/posts`,
        name: "posts",
      },
    },
    "gatsby-transformer-remark",
    {
      resolve: `gatsby-plugin-intl`,
      options: {
        // language JSON resource path
        path: `${__dirname}/src/intl`,
        // supported language
        languages: [`pt`, `en`],
        // language file path
        defaultLanguage: `pt`,
        // option to redirect to `/ko` when connecting `/`
        redirect: false,
      },
    },
  ],
};
