import { graphql, useStaticQuery } from "gatsby"

function useFocusAreas() {
  const data = useStaticQuery(graphql`
    query getFocusAreas {
      allDirectusFocusarea {
        edges {
          node {
            description
            directusId
            headline
            link
            icon {
              localFile {
                img: childCloudinaryAsset {
                  fluid(maxWidth: 100) {
                    ...CloudinaryAssetFluid
                  }
                }
              }
            }
          }
        }
      }
    }
  `)

  return data.allDirectusFocusarea.edges.map(({ node }) => ({
    description: node.description,
    headline: node.headline,
    link: node.link,
    id: node.directusId,
    icon: node.icon.localFile.img.fluid,
  }))
}

export default useFocusAreas
