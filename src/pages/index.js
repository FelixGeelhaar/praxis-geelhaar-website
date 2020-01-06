import React from "react"
import { graphql } from "gatsby"

import SEO from "../components/seo"
import Header from "../components/header"
import Footer from "../components/footer"

// Home sections
import TeaserSection from "../components/teaser"
import FocusAreasSection from "../components/focus-area"
import ContactSection from "../components/contact"
import DoctorsSection from "../components/doctors"

const Home = ({ data }) => {
  return (
    <>
      <SEO title="Home" />
      <Header siteTitle={data.site.siteMetadata.title} />
      <TeaserSection />
      <FocusAreasSection />
      <ContactSection />
      <DoctorsSection />
      <Footer />
    </>
  )
}

export const query = graphql`
  query SiteTitleQuery {
    site {
      siteMetadata {
        title
      }
    }
  }
`

export default Home
