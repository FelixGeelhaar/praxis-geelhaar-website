import { graphql, useStaticQuery } from "gatsby"

function useContact() {
  const {
    allDirectusContact,
    allDirectusContent,
    allDirectusOpeningTime,
  } = useStaticQuery(graphql`
    query {
      allDirectusContact {
        edges {
          node {
            address_email
            address_name
            address_website
            adress
            adress_phonenumber
            directusId
          }
        }
      }
      allDirectusContent(filter: { headline: { glob: "Willkommen*" } }) {
        edges {
          node {
            content
            headline
            directusId
            image {
              localFile {
                img: childCloudinaryAsset {
                  fluid {
                    ...CloudinaryAssetFluid
                  }
                }
              }
            }
          }
        }
      }
      allDirectusOpeningTime {
        edges {
          node {
            directusId
            opening_time
          }
        }
      }
    }
  `)

  return {
    content: allDirectusContent.edges.map(({ node }) => ({
      id: node.directusId,
      headline: node.headline,
      content: node.content,
      image: node.image.localFile.img.fluid,
    })),
    contact: allDirectusContact.edges.map(({ node }) => ({
      name: node.address_name,
      email: node.address_email,
      website: node.address_website,
      address: node.adress,
      phoneNumber: node.adress_phonenumber,
      id: node.directusId,
    })),
    openingTime: allDirectusOpeningTime.edges.map(({ node }) => ({
      id: node.directusId,
      opening_time: node.opening_time,
    })),
  }
}

export default useContact
