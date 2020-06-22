import React from "react"
import { StaticQuery, graphql } from "gatsby"
import Image, { FluidObject } from "gatsby-image"
import { css } from "@emotion/core"

interface Props {
  id: string
  name: string
}

interface Node {
  node: {
    id: string
    fluid: FluidObject
  }
}

export default function Icon({ id, name }: Props) {
  return (
    <StaticQuery
      query={graphql`
        query ImageQuery {
          assets: allCloudinaryAsset {
            edges {
              node {
                id
                fluid {
                  ...CloudinaryAssetFluid
                }
              }
            }
          }
        }
      `}
      render={(data) => {
        const index = data.assets.edges.findIndex(
          ({ node }: Node, index: number) => {
            if (node.id === id) {
              return index
            }
          }
        )
        return (
          <Image
            css={css`
              max-width: 5rem;
            `}
            fluid={data.assets.edges[index].node.fluid}
            alt={name}
          />
        )
      }}
    />
  )
}
