import { Link } from "gatsby"
import React from "react"
import styled from "styled-components"
import LogoImage from "../images/logo.png"

const Header = () => (
  <Wrapper>
    <Link
      to="/"
      style={{
        color: `black`,
        textDecoration: `none`,
      }}
    >
      <Logo alt="logo" src={LogoImage} />
    </Link>
  </Wrapper>
)

const Logo = styled.img`
  max-width: 30%;
`

const Wrapper = styled.div`
  /* background: linear-gradient(180deg, #4316db 0%, #9076e7 100%); */
  max-width: 1234px;
  margin: 30px 200px;
`

export default Header
