/**
 * Layout component that queries for data
 * with Gatsby's useStaticQuery component
 *
 * See: https://www.gatsbyjs.org/docs/use-static-query/
 */

import React from "react"
import PropTypes from "prop-types"
import { useStaticQuery, graphql } from "gatsby"
import styled from "styled-components"

import Header from "./header"
import "./layout.css"

const MainContainer = styled.div`
  font-family: "Open Sans", Roboto, sans-serif;
  color: black;
  color: #444444;
  font-weight: 600;
  background-color: #fefefe;
  min-height: 100vh;
  display: flex;
  flex-direction: column;
  flex: 1;

  /* css-variables */
  --nbu-blue: #226db1;
`

const Body = styled.div`
  padding-top: 0;
  flex: 1;
`

const Footer = styled.footer`
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: space-evenly;
  width: 100%;
  padding: 1.5rem;
  background-color: var(--nbu-blue);
  color: white;
  font-size: 1.1rem;
  font-style: italic;
`
const FooterContainer = styled.div`
  display: flex;
  flex-direction: column;
`

const FooterTitle = styled.div`
  display: flex;
  font-size: 0.9rem;
`
const FooterText = styled.div`
  display: flex;
`

const Layout = ({ children }) => {
  const data = useStaticQuery(graphql`
    query SiteTitleQuery {
      site {
        siteMetadata {
          title
        }
      }
    }
  `)

  return (
    <MainContainer>
      <Header siteTitle={data.site.siteMetadata.title} />
      <Body>
        <main>{children}</main>
      </Body>
      <Footer>
        <FooterContainer>Urban Nilsson</FooterContainer>
        <FooterContainer>
          <FooterTitle>Telefon:</FooterTitle>
          <FooterText>(+46) 0731 - 123 123</FooterText>
        </FooterContainer>
        <FooterContainer>
          <FooterTitle>E-post:</FooterTitle>
          <FooterText>urban@nilssonsbyggumea.se</FooterText>
        </FooterContainer>
      </Footer>
    </MainContainer>
  )
}

Layout.propTypes = {
  children: PropTypes.node.isRequired,
}

export default Layout
