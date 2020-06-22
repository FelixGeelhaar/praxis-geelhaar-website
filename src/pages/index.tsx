import React from "react"
import { graphql } from "gatsby"

import SEO from "../components/SEO"
import Header from "../components/Header"
import Banner from "../components/Banner"
import FocusActivities from "../components/FocusActivities"
import Contact from "../components/Contact"

interface Props {
  data: {
    site: {
      siteMetadata: {
        title: string
      }
    }
  }
}

const Home = ({ data }: Props) => {
  return (
    <>
      <SEO title="Home" />
      <Header siteTitle={data.site.siteMetadata.title} />
      <Banner />
      <FocusActivities />
      <Contact />
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
