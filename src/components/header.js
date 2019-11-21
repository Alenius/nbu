import { Link } from "gatsby"
import PropTypes from "prop-types"
import React from "react"
import styled from "styled-components"

const HeaderRoot = styled.header`
  display: flex;
  width: 100%;
  align-items: center;
`

const HeaderContainer = styled.div`
  margin: 0 auto;
  height: 5rem;
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: baseline;
`
const Logo = styled(Link)`
  color: var(--nbu-blue);
  font-family: Limelight, serif;
  font-size: 2.5rem;
  text-decoration: none;
`

const LogoContainer = styled.div`
  padding-left: 5rem;
  padding-right: 5rem;
`

const StyledLink = styled(Link)`
  font-family: "Oswald", "Open-Sans", "sans-serif";
  margin-bottom: 0;
  height: 100%;
  display: flex;
  align-items: center;

  text-decoration: none;
  font-size: 1.75rem;
  color: black;

  transition: 0.25s;
  padding: 0px 1rem;

  :hover {
    color: var(--nbu-blue);
  }
`

const Header = ({ siteTitle }) => (
  <HeaderRoot>
    <HeaderContainer>
      <StyledLink
        to="/pictures/"
        activeStyle={{
          color: "var(--nbu-blue)",
          textDecoration: "underline",
        }}
      >
        Bilder
      </StyledLink>
      <LogoContainer>
        <Logo to="/">{siteTitle}</Logo>
      </LogoContainer>
      <StyledLink
        to="/contact/"
        activeStyle={{
          color: "var(--nbu-blue)",
          textDecoration: "underline",
        }}
      >
        Kontakt
      </StyledLink>
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
