import React from "react";
import Layout from "../components/Layout";
import { useIntl } from "gatsby-plugin-intl";

export default function About() {
  const intl = useIntl();
  const locale = intl.locale !== "pt" ? `${intl.locale}` : "";

  return (
    <Layout className="about" title={intl.formatMessage({ id: "about" })}>
      <section className="page-content">
        <h1>{intl.formatMessage({ id: "about" })}</h1>
        <div className="page-text">
          {intl.locale === "pt" ? (
            <p>
              Site feito para mostrar a criação de um site bilíngue utilizando o
              Gatsby JS. O tutorial está em um artigo do meu blog. Fique a
              vontade para ver o código-fonte, fazer um fork, ou até usá-lo em
              seus projetos.
            </p>
          ) : (
            <p>
              Site made to showcase the creation of a bilingual website using
              Gatsby JS. The tutorial is in an article on my blog. Feel free to
              view the source code, fork it, or even use it in your projects.
            </p>
          )}
          <div className="links">
            <h2>Links</h2>
            <ul>
              <li>
                <a
                  href={`https://blog.elvessousa.com.br/${locale}`}
                  rel="noopener noreferrer"
                  target="_blank"
                >
                  Blog
                </a>
              </li>
              <li>
                <a
                  href={`https://blog.elvessousa.com.br/${locale}`}
                  rel="noopener noreferrer"
                  target="_blank"
                >
                  Tutorial
                </a>
              </li>
              <li>
                <a
                  href="https://github.com/elvessousa/gatsby-intl"
                  rel="noopener noreferrer"
                  target="_blank"
                >
                  Gatsby INTL - Github Repo
                </a>
              </li>
              <li>
                <a
                  href={`https://elvessousa.com.br/${locale}`}
                  rel="noopener noreferrer"
                  target="_blank"
                >
                  Elves Sousa - Portfolio
                </a>
              </li>
            </ul>
          </div>
        </div>
      </section>
    </Layout>
  );
}
