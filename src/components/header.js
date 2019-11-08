import { Link } from "gatsby"
import PropTypes from "prop-types"
import React from "react"
import styled from "styled-components"

const HeaderRoot = styled.header`
  background: gray;
  margin-bottom: 1.45rem;
`

const HeaderContainer = styled.div`
  margin: 0 auto;
  max-width: 1000px;
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: baseline;
`
const Logo = styled.h1`
  margin: 0;
  font-family: Limelight, serif;
  padding: 1.45rem 1.0875rem;
`

const StyledLink = styled(Link)`
  text-decoration: none;
  padding: 1.45rem 1.0875rem;
  color: black;
  align-self: center;
  padding-top: 10px;
  transition: 0.25s;

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
      <div style={{ display: `flex`, flexDirection: `row` }}>
        <h2>
          <StyledLink to="/pictures/">Bilder</StyledLink>
        </h2>
        <h2>
          <StyledLink to="/contact/">Kontakt</StyledLink>
        </h2>
      </div>
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
