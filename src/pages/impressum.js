import React from "react"
import { graphql, Link } from "gatsby"
import { css } from "@emotion/core"

import SEO from "../components/seo"
import Header from "../components/header"
import Footer from "../components/footer"
import Container from "../components/container"

function Impressum({ data }) {
  return data.allDirectusContent.edges.map(({ node }) => (
    <section key={node.id}>
      <SEO title="Impressum" />
      <Header />
      <Container
        css={css`
          h1,
          h2,
          h3 {
            margin: 1rem 0;
          }
          a,
          a:link {
            color: var(--primary);
          }
        `}
      >
        <Link
          css={css`
            display: block;
            margin: 1rem 0;
            color: var(--primary);
          `}
          to="/"
        >
          &larr; zurück zur Startseite
        </Link>
        <h1>{node.headline}</h1>
        <div dangerouslySetInnerHTML={{ __html: node.content }} />
      </Container>
      <Footer />
    </section>
  ))
}

export default Impressum

export const query = graphql`
  query ImpressumQuery {
    allDirectusContent(filter: { headline: { eq: "Impressum" } }) {
      edges {
        node {
          id
          headline
          content
        }
      }
    }
    site {
      siteMetadata {
        title
      }
    }
  }
`
