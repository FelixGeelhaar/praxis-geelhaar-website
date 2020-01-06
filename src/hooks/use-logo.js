import { graphql, useStaticQuery } from "gatsby"

function useLogo() {
  const data = useStaticQuery(graphql`
    query getLogo {
      directusFile(private_hash: { eq: "n1lau4ksc2og8wwg" }) {
        localFile {
          img: childCloudinaryAsset {
            fluid(maxWidth: 350) {
              ...CloudinaryAssetFluid
            }
          }
        }
      }
    }
  `)

  return data.directusFile.localFile.img.fluid
}

export default useLogo
