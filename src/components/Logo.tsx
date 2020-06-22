import React from "react"
import { StaticQuery, Link, graphql } from "gatsby"
import Image from "gatsby-image"
import { css } from "@emotion/core"

import Container from "./Container"

export default function Logo() {
  return (
    <StaticQuery
      query={graphql`
        query LogoQuery {
          asset: cloudinaryAsset(
            id: { eq: "a9bdfa35-5dad-5d01-b49f-440e55aeae89" }
          ) {
            fluid(maxWidth: 100) {
              ...CloudinaryAssetFluid
            }
          }
        }
      `}
      render={(data) => (
        <>
          <Link to="/">
            <Container
              css={css`
                display: flex;
                flex-flow: row wrap;
                align-items: center;
                justify-content: center;

                @media (min-width: 600px) {
                  justify-content: flex-start;
                }
              `}
            >
              <div
                css={css`
                  min-width: 4rem;
                  margin-right: 0.5rem;
                `}
              >
                <Image fluid={data.asset.fluid} alt="Praxis Logo" />
              </div>
              <div>
                <h2>Praxis Geelhaar</h2>
                <h6>Chirurgische Praxis</h6>
              </div>
            </Container>
          </Link>
        </>
      )}
    />
  )
}
