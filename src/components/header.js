import { Link } from "gatsby"
import PropTypes from "prop-types"
import React from "react"
import styled from "styled-components"

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
  <header
    style={{
      background: `gray`,
      marginBottom: `1.45rem`,
    }}
  >
    <div
      style={{
        margin: `0 auto`,
        maxWidth: 1000,
        display: `flex`,
        flexDirection: `row`,
        justifyContent: "space-between",
        alignItems: "baseline",
      }}
    >
      <h1
        style={{
          margin: 0,
          fontFamily: `Limelight, serif`,
          padding: `1.45rem 1.0875rem`,
        }}
      >
        <Link
          to="/"
          style={{
            color: `black`,
            textDecoration: `none`,
          }}
        >
          {siteTitle}
        </Link>
      </h1>
      <div style={{ display: `flex`, flexDirection: `row` }}>
        <h2>
          <StyledLink to="/pictures/">Bilder</StyledLink>
        </h2>
        <h2>
          <StyledLink to="/contact/">Kontakt</StyledLink>
        </h2>
      </div>
    </div>
  </header>
)

Header.propTypes = {
  siteTitle: PropTypes.string,
}

Header.defaultProps = {
  siteTitle: ``,
}

export default Header
