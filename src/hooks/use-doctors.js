import { graphql, useStaticQuery } from "gatsby"

function useDoctors() {
  const data = useStaticQuery(graphql`
    query getDoctorsData {
      allDirectusDoctor {
        edges {
          node {
            curriculum_vitae
            directusId
            name
            title_of_doctor
            focus_areas
            image {
              localFile {
                img: childCloudinaryAsset {
                  fluid(maxWidth: 350) {
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

  return data.allDirectusDoctor.edges.map(({ node }) => ({
    cv: node.curriculum_vitae,
    id: node.directusId,
    name: node.name,
    title: node.title_of_doctor,
    focus_areas: node.focus_areas,
    image: node.image.localFile.img.fluid,
  }))
}

export default useDoctors
