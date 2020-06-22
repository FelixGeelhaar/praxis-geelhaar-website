import React from "react"
import { graphql, StaticQuery } from "gatsby"
import Image from "gatsby-image"
import { css } from "@emotion/core"
import styled from "@emotion/styled"

const Headline = styled.h2`
  font-size: 2rem;
  font-weight: 600;
  letter-spacing: 0.2rem;
  padding: 0 0.5rem;
`

export default function Banner() {
  return (
    <StaticQuery
      query={graphql`
        query BannerQuery {
          asset: cloudinaryAsset(
            id: { eq: "79559888-4f2e-5ca5-80d7-6deb0309bf1c" }
          ) {
            fluid {
              src
            }
          }
        }
      `}
      render={(data) => (
        <div
          css={css`
            background-image: url(${data.asset.fluid.src});
            min-height: 25vh;
            box-shadow: 10px 10px 50px -30px rgba(0, 0, 0, 0.75);
            padding: 2rem;
            display: grid;
            row-gap: 2rem;
          `}
        >
          <div
            css={css`
              flex-flow: column nowrap;
              align-items: flex-start;
            `}
          >
            <Headline>Ehrlichkeit.</Headline>
            <Headline>Qualiät.</Headline>
            <Headline>Menschlichkeit.</Headline>
          </div>
          <div>
            <blockquote>
              Ich lege sehr viel Wert auf das Wohlbefinden unserer Patienten.
              Gemeinsam mit Ihnen wählen wir die schonenste und beste
              Behandlung. – Günter H. Geelhaar
            </blockquote>
            {/* <Image alt="Günter Geelhaar" /> */}
          </div>
        </div>
      )}
    />
  )
}
