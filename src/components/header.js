import { Link } from "gatsby"
import PropTypes from "prop-types"
import React from "react"
import styled from "styled-components"

const HeaderRoot = styled.header`
  background: gray;
`

const HeaderContainer = styled.div`
  margin: 0 auto;
  max-width: 1000px;
  height: 80px;
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
`
const Logo = styled.div`
  font-family: Limelight, serif;
  font-size: 2rem;
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
    color: lightblue;
  }
`

const Header = ({ siteTitle }) => (
  <HeaderRoot>
    <HeaderContainer>
      <Logo>
        <Link
          to="/"
          style={{
            color: `black`,
            textDecoration: `none`,
          }}
        >
          {siteTitle}
        </Link>
      </Logo>
      <LinkContainer>
        <StyledLink to="/pictures/">Bilder</StyledLink>
        <StyledLink to="/contact/">Kontakt</StyledLink>
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
