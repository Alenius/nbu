import React from "react"
import Layout from "../../components/layout"
import SEO from "../../components/seo"
import Img from "gatsby-image"
import { useStaticQuery } from "gatsby"
import styled from "styled-components"
import { GalleryPageContainer } from "../../components/GalleryPageContainer"

const imageTexts = [
  "Ofärdig insida",
  "Här kan vi se en nylagd trall som löper runt huset",
  "Början till altan",
  "Färdig altan",
  "Stugan från framsidan",
]

const cabin = () => {
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
      <SEO title="Stuga Vindeln" />
      <GalleryPageContainer
        title="Stuga utanför Vindeln"
        subtitle="Denna stuga byggde vi från grund till nock."
        imageQuery={allFile}
        imageTexts={imageTexts}
      />
    </Layout>
  )
}
export default cabin
