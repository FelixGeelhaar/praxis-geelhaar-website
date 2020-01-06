import React from "react"
import { Link } from "gatsby"
import { css } from "@emotion/core"

import SEO from "../components/seo"
import Header from "../components/header"
import Footer from "../components/footer"
import Container from "../components/container"

function NotFound() {
  return (
    <section
      css={css`
        height: 100%;
        display: flex;
        flex-flow: column nowrap;
        align-content: space-between;
      `}
    >
      <SEO title="Not Found" />
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
          height: 100%;
        `}
      >
        <h1>Diese Seite ist nicht Verfügbar.</h1>
        <p>Diese Seite scheint es nicht (mehr) zu geben.</p>
        <Link to="/"> &larr; zurück zur Startseite </Link>
      </Container>
      <Footer />
    </section>
  )
}

export default NotFound
