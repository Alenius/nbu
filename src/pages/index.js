import React from "react"
import { Link } from "gatsby"

import Layout from "../components/layout"
import Image from "../components/image"
import SEO from "../components/seo"

import styled, { keyframes } from "styled-components"

const fadeIn = keyframes`
  0% {
    opacity: 0;
  }
  100% {
    opacity: 1;
  }
`

const PageContainer = styled.div`
  display: flex;
  flex-direction: column;
  padding: 5rem 0;
  align-items: center;
`
const MainContainer = styled.div`
  display: flex;
  flex-direction: column;
  max-width: 50%;
`
const TextContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  width: 60%;
`

const MainTitle = styled.div`
  font-family: "Oswald", "Open-Sans", "sans-serif";
  align-self: center;
  font-size: 2.5rem;
  padding-bottom: 4rem;
  animation: ${fadeIn} 1s ease-in-out;
  font-style: italic;
`

const SubTitle = styled.div`
  font-family: "Oswald", "Open-Sans", "sans-serif";
  font-size: 1.5rem;
  padding-bottom: 1rem;
  opacity: 0;
  animation: ${fadeIn} 1s ease-in-out forwards;
  animation-delay: 0.25s;
`

const MainText = styled.div`
  font-size: 1rem;
  padding-bottom: 2rem;
  opacity: 0;
  animation: ${fadeIn} 1s ease-in-out forwards;
  animation-delay: 0.5s;
`
const StyledLink = styled(Link)`
  font-size: 1.1rem;
  text-decoration: none;
  color: #226db1;
  opacity: 0;
  padding-bottom: 2rem;
  animation: ${fadeIn} 1s ease-in-out forwards;
  animation-delay: 0.5s;
`

const StyledList = styled.ul`
  padding: 0.5rem;
  padding-bottom: 0;
`

const IndexPage = () => (
  <Layout>
    <SEO title="Hem" />
    <PageContainer>
      <MainContainer>
        <MainTitle>Din snickare i Umeå</MainTitle>
        <SubTitle>Efter dina behov</SubTitle>
        <MainText>
          Vi kan hjälpa er med det mesta inom bygg, till exempel:
          <StyledList>
            <li>Nybyggnation</li>
            <li>ROT-jobb</li>
            <li>Murning</li>
            <li>Kakling</li>
            <li>Fönsterbyte</li>
          </StyledList>
          För att få mer uppfattning om vårat arbete så kan ni gå till vårat
          bildgalleri där vi har bilder från jobb som vi utfört. Vi fixar det
          mesta.
        </MainText>
        <StyledLink
          to="/pictures/"
          activeStyle={{ color: "#226db1", textDecoration: "underline" }}
        >
          {"Bildgalleri \u2192"}
        </StyledLink>
        <SubTitle>Lång erfarenhet</SubTitle>
        <MainText>
          Vi har funnits sedan 2005 och haft många nöjda kunder under dessa år.
          Företaget består av två personer, Urban Nilsson och hans son David.
        </MainText>
        <SubTitle>Kontakt</SubTitle>
        <MainText>
          Om du har några frågor eller vill ha en offert så kontakta urban på
          telefonnummer 0723 123 123, eller om du föredrar att maila på
          urban@nilssonsbyggumea.se
        </MainText>
      </MainContainer>
    </PageContainer>
  </Layout>
)

export default IndexPage
