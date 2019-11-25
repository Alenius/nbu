import React from "react"
import Layout from "../../components/layout"
import SEO from "../../components/seo"
import ImageCard from "../../components/ImageCard"
import styled from "styled-components"
import { useStaticQuery, graphql, Link } from "gatsby"

const PageContainer = styled.div`
  display: flex;
  align-items: center;
  flex: 1;
  justify-content: center;
`

const CardContainer = styled.div`
  display: grid;
  grid-template-columns: 20rem 20rem 20rem;
  grid-template-rows: repeat(auto);
  row-gap: 1rem;
  grid-gap: 1rem;
  padding: 1rem;
  justify-content: center;
`

const DestyledLink = styled(Link)`
  text-decoration: none;
`

const PicturePage = () => {
  const query = useStaticQuery(graphql`
    query {
      image1: file(relativePath: { eq: "stuga/Stuga1.jpg" }) {
        childImageSharp {
          fluid(maxWidth: 300, maxHeight: 300) {
            ...GatsbyImageSharpFluid
          }
        }
      }
      image2: file(relativePath: { eq: "kitchen/Kok1.jpg" }) {
        childImageSharp {
          fluid(maxWidth: 300, maxHeight: 300) {
            ...GatsbyImageSharpFluid
          }
        }
      }
      image3: file(relativePath: { eq: "kitchen/Kok2.jpg" }) {
        childImageSharp {
          fluid(maxWidth: 300, maxHeight: 300) {
            ...GatsbyImageSharpFluid
          }
        }
      }
      image4: file(relativePath: { eq: "kitchen/Kok3.jpg" }) {
        childImageSharp {
          fluid(maxWidth: 300, maxHeight: 300) {
            ...GatsbyImageSharpFluid
          }
        }
      }
    }
  `)

  return (
    <Layout>
      <SEO title="Bilder"></SEO>
      {/* <h1>Bilder</h1> */}
      <PageContainer>
        <CardContainer>
          <DestyledLink to="/pictures/cabin_vindeln">
            <ImageCard
              image={query.image1.childImageSharp.fluid}
              title="Stugbygge utanför Vindeln"
              key={query.image1}
            />
          </DestyledLink>
          <DestyledLink to="/pictures/kitchen_umea">
            <ImageCard
              image={query.image2.childImageSharp.fluid}
              title="Köksrenovering i Umeå"
              key={query.image2}
            />
          </DestyledLink>
          <ImageCard
            image={query.image3.childImageSharp.fluid}
            title="Kök"
            key={query.image2}
          />
          <ImageCard
            image={query.image4.childImageSharp.fluid}
            title="Kök"
            key={query.image2}
          />
        </CardContainer>
      </PageContainer>
      {/* <div>
        {allFile.edges.map(edge => {
          console.log(edge)
          return (
            <Img fluid={edge.node.childImageSharp.fluid} key={edge.node.name} />
          )
        })}
      </div> */}
    </Layout>
  )
}

export default PicturePage
