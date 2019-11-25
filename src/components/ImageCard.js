import React from "react"
import Img from "gatsby-image"
import styled from "styled-components"
import { useStaticQuery, graphql, Link } from "gatsby"

const ImageCardRoot = styled.div`
  position: relative;
  text-align: center;
  display: flex;
  flex-direction: column;
  background-color: var(--nbu-blue);
  transition: 0.5s;
  /* border: 1px solid black; */
  color: white;
`

const ImageOverlay = styled.div`
  position: absolute;
  bottom: 0;
  width: 100%;
  height: 25%;
  padding-top: 2rem;
  color: white;
  display: flex;
  align-items: center;
  justify-content: center;
  justify-self: center;
  opacity: 1;
  z-index: 1;
  background: rgba(0, 0, 0, 0.5);
  transform: 0.5s;
  padding: 10px;
  box-shadow: 5px 10px;
`

const ImageContainer = styled.div`
  ${ImageCardRoot}:hover & {
    cursor: pointer;
  }
`

const ImageTitleContainer = styled.div`
  padding: 1rem;
  display: flex;
  flex-direction: column;
  justify-content: center;
`
const ImageTitle = styled.div`
  display: flex;
  font-size: 1rem;
  font-style: italic;
`

const ImageCard = ({ image, title, key }) => {
  return (
    <ImageCardRoot>
      <ImageContainer>
        <Img fluid={image} key={key} />
        <ImageOverlay>
          <ImageTitle>{title}</ImageTitle>
        </ImageOverlay>
      </ImageContainer>
    </ImageCardRoot>
  )
}

export default ImageCard
