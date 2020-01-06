import { graphql, useStaticQuery } from "gatsby"

function useTeasers() {
  const data = useStaticQuery(graphql`
    query getTeasers {
      allDirectusTeaser {
        edges {
          node {
            directusId
            headline
            description
            image {
              localFile {
                img: childCloudinaryAsset {
                  fluid {
                    ...CloudinaryAssetFluid
                  }
                }
              }
            }
            background_image {
              localFile {
                img: childCloudinaryAsset {
                  fluid {
                    src
                  }
                }
              }
            }
          }
        }
      }
    }
  `)

  return data.allDirectusTeaser.edges.map(({ node }) => ({
    id: node.directusId,
    headline: node.headline,
    description: node.description,
    image: node.image.localFile.img.fluid,
    background: node.background_image.localFile.img.fluid.src,
  }))
}

export default useTeasers
