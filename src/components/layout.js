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
  position: relative;
  background-color: silver;
  min-height: 100vh;
`

const Body = styled.div`
  padding-top: 0;
  padding: 2rem 20rem;
  padding-bottom: 10rem;
`

const Footer = styled.footer`
  position: absolute;
  bottom: 0;
  width: 100%;
  padding: 1rem;
  background-color: gray;
  text-align: center;
  font-size: 20px;
`

const FooterPhoneNr = styled.p`
  font-style: italic;
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
        <p>Kontakt</p>
        <FooterPhoneNr>Urban - 0731 23 12 12</FooterPhoneNr>
      </Footer>
    </MainContainer>
  )
}

Layout.propTypes = {
  children: PropTypes.node.isRequired,
}

export default Layout
