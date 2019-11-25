import React from "react"
import Layout from "../../components/layout"
import SEO from "../../components/seo"
import Img from "gatsby-image"
import { useStaticQuery } from "gatsby"
import styled from "styled-components"
import { GalleryPageContainer } from "../../components/GalleryPageContainer"

const imageTexts = ["Kök med spis", "Diskbänk osv", "Rummet i sig", "Kylskåp"]
const kitchen = () => {
  const { allFile } = useStaticQuery(graphql`
    query {
      allFile(
        filter: {
          extension: { regex: "/(jpg)|(jpeg)|(png)/" }
          relativeDirectory: { eq: "kitchen" }
        }
      ) {
        edges {
          node {
            id
            name
            childImageSharp {
              fluid(maxWidth: 1000, quality: 100) {
                originalName
                ...GatsbyImageSharpFluid
              }
            }
          }
        }
      }
    }
  `)

  return (
    <Layout>
      <SEO title="Kök Umeå" />
      <GalleryPageContainer
        title="Kök i Umeå"
        imageQuery={allFile}
        imageTexts={imageTexts}
      />
    </Layout>
  )
}
export default kitchen
