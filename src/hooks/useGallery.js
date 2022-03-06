import { graphql, useStaticQuery } from "gatsby";

const useGallery = () => {
    const data = useStaticQuery(graphql`
      query {
        allFile(
          filter: { sourceInstanceName: { eq: "gallery" } }
        ) {
          nodes {
            id
            childImageSharp {
                gatsbyImageData(
                    width: 400
                    placeholder: BLURRED
                    formats: [AUTO, WEBP, AVIF]
                    layout: FULL_WIDTH
                )
            }
          }
        }
      }
    `);
  
    return data.allFile.nodes.map(node => ({
      ...node.childImageSharp, // Note that we're spreading the childImageSharp object here
      id: node.id,
    }));
  };
  
  export default useGallery;