import React from "react"
import Layout from "../components/layout"
import SEO from "../components/seo"
import Img from "gatsby-image"
import Image from "../components/image"
import styled from "styled-components"
import { useStaticQuery, graphql } from "gatsby"

const CardContainer = styled.div`
  display: flex;
  padding: 1rem;
`
const ImageCard = styled.div`
  position: relative;
  text-align: center;
  display: flex;
  flex-direction: column;
  padding: 1rem;
  height: 350px;
  width: 350px;
  transition: 0.5s;

  :hover {
    cursor: pointer;
  }
`

const ImageContainer = styled.div`
  transition: 0.5s;
  -webkit-filter: blur(2ipx); /* Safari 6.0 - 9.0 */
  filter: blur(2ipx);

  ${ImageCard}:hover & {
    transform: scale(1.1);
    cursor: pointer;
    -webkit-filter: blur(3px); /* Safari 6.0 - 9.0 */
    filter: blur(3px);
  }
`
const ImageOverlay = styled.div`
  color: white;
  position: absolute;
  width: calc(100% - 2rem);
  align-self: center;
  opacity: 0;
  z-index: 1;
  background: rgba(0, 0, 0, 0.5);
  transform: 0.5s;
  padding: 10px;

  ${ImageCard}:hover & {
    opacity: 1;
    -webkit-transition: max-height 0.25s;
    transition: opacity 0.5s ease-in;
    transform: translateY(100px);
  }
`

const ImageTitleContainer = styled.div`
  padding: 1rem;
  display: flex;
  flex-direction: column;
  justify-content: center;
`

const ImageTitle = styled.div`
  font-size: 22px;
  background-color: rgba(0, 0, 0, 0.25);
  border-radius: 10px;
  padding: 10px;
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
    }
  `)

  return (
    <Layout>
      <SEO title="Bilder"></SEO>
      <h1>Bilder</h1>
      <CardContainer>
        <ImageCard>
          <ImageOverlay>
            <p>Vindelns kommun 2004</p>
            <p>Se galleri ></p>
          </ImageOverlay>
          <ImageContainer>
            <Img
              fluid={query.image1.childImageSharp.fluid}
              key={query.image1}
            />
          </ImageContainer>
          <ImageTitleContainer>
            <ImageTitle>Stuga</ImageTitle>
          </ImageTitleContainer>
        </ImageCard>
        <ImageCard>
          <ImageContainer>
            <Img
              fluid={query.image2.childImageSharp.fluid}
              key={query.image1}
            />
          </ImageContainer>
          <ImageTitleContainer>
            <ImageTitle>Kök</ImageTitle>
          </ImageTitleContainer>
        </ImageCard>
      </CardContainer>
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
