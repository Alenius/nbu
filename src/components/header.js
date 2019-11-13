import { Link } from "gatsby"
import PropTypes from "prop-types"
import React from "react"
import styled from "styled-components"

const HeaderRoot = styled.header`
  display: flex;
  width: 100%;
`

const HeaderContainer = styled.div`
  margin: 0 auto;
  width: 60%;
  height: 5rem;
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
`
const Logo = styled(Link)`
  color: #226db1;
  font-family: Limelight, serif;
  font-size: 2.5rem;
  text-decoration: none;
`

const LinkContainer = styled.div`
  display: flex;
  align-items: center;
  height: 100%;
`

const StyledLink = styled(Link)`
  margin-bottom: 0;
  flex: 1;
  height: 100%;
  display: flex;
  align-items: center;

  text-decoration: none;
  font-size: 1.5rem;
  color: black;

  transition: 0.25s;
  padding: 0px 1rem;

  :hover {
    color: #226db1;
  }
`

const Header = ({ siteTitle }) => (
  <HeaderRoot>
    <HeaderContainer>
      <Logo to="/">{siteTitle}</Logo>
      <LinkContainer>
        <StyledLink
          to="/pictures/"
          activeStyle={{ color: "#226db1", textDecoration: "underline" }}
        >
          Bilder
        </StyledLink>
        <StyledLink
          to="/contact/"
          activeStyle={{ color: "#226db1", textDecoration: "underline" }}
        >
          Kontakt
        </StyledLink>
      </LinkContainer>
    </HeaderContainer>
  </HeaderRoot>
)

Header.propTypes = {
  siteTitle: PropTypes.string,
}

Header.defaultProps = {
  siteTitle: ``,
}

export default Header
