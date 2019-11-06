import React from "react"
import Layout from "../components/layout"
import SEO from "../components/seo"
import Img from "gatsby-image"
import Image from "../components/image"
import styled from "styled-components"
import { useStaticQuery, graphql } from "gatsby"

const MediumImage = styled.div`
  width: 10rem;
`

const PicturePage = () => {
  const { allFile } = useStaticQuery(graphql`
    query {
      allFile(
        filter: {
          extension: { regex: "/(jpg)|(jpeg)|(png)/" }
          relativeDirectory: { eq: "stuga" }
        }
      ) {
        edges {
          node {
            id
            name
            relativeDirectory
            childImageSharp {
              fluid(maxWidth: 200, quality: 100) {
                originalName
                ...GatsbyImageSharpFluid
              }
            }
          }
        }
      }
    }
  `)

  console.log(allFile.edges)

  return (
    <Layout>
      <SEO title="Bilder"></SEO>
      <h1>Bilder</h1>
      <div>
        {allFile.edges.map(edge => {
          console.log(edge)
          return (
            <Img fluid={edge.node.childImageSharp.fluid} key={edge.node.name} />
          )
        })}
      </div>
    </Layout>
  )
}

export default PicturePage
