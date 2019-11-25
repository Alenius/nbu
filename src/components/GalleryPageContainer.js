import React from "react"
import styled, { css } from "styled-components"
import Img from "gatsby-image"

const sharedTitleStyle = css`
  align-self: flex-start;
  padding-left: 1rem;
`

const Title = styled.h1`
  ${sharedTitleStyle}
`

const Subtitle = styled.h2`
  ${sharedTitleStyle}
`

const PageContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  padding-left: 20%;
  padding-right: 20%;
`

const ImageContainer = styled.div`
  display: flex;
  flex-direction: ${props => (props.even ? "row" : "row-reverse")};
  padding: 1.5rem;
  width: 100%;
`

const Image = styled(Img)`
  flex: 2;
`

const ImageText = styled.div`
  display: flex;
  flex: 1;
  justify-content: center;
  align-items: center;
  text-align: center;
  font-style: italic;
`

export const GalleryPageContainer = ({
  title,
  subtitle,
  imageQuery,
  imageTexts,
}) => {
  return (
    <PageContainer>
      <Title>{title}</Title>
      <Subtitle>{subtitle}</Subtitle>
      {imageQuery.edges.map((edge, index) => {
        return (
          <ImageContainer even={index % 2 === 0} key={edge.node.name}>
            <Image fluid={edge.node.childImageSharp.fluid} />
            <ImageText>{imageTexts[index]}</ImageText>
          </ImageContainer>
        )
      })}
    </PageContainer>
  )
}
