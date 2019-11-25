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
  align-items: center;
`
const MainContainer = styled.div`
  display: flex;
  flex-direction: column;
  min-width: 600px;
  max-width: 60%;
`

const TextContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  width: 60%;
`

const MainTitle = styled.h1`
  font-style: italic;
  animation: ${fadeIn} 1s ease-in-out;
`

const SubTitle = styled.h2`
  opacity: 0;
  animation: ${fadeIn} 1s ease-in-out forwards;
  animation-delay: 0.25s;
`

const MainText = styled.div`
  font-size: 1rem;
  opacity: 0;
  animation: ${fadeIn} 1s ease-in-out forwards;
  animation-delay: 0.5s;
`
const StyledLink = styled(Link)`
  font-size: 1.1rem;
  text-decoration: none;
  color: var(--nbu-blue);
  opacity: 0;
  padding-bottom: 2rem;
  animation: ${fadeIn} 1s ease-in-out forwards;
  animation-delay: 0.5s;
`

const StyledList = styled.ul`
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
          <p>Vi kan hjälpa er med det mesta inom bygg, till exempel:</p>
          <StyledList>
            <li>Nybyggnation</li>
            <li>ROT-jobb</li>
            <li>Murning</li>
            <li>Kakling</li>
            <li>Fönsterbyte</li>
          </StyledList>
          <p>
            Vi hjälper er även med utformning av erat projekt och kan komma med
            förslag på olika lösningar.{" "}
          </p>
          <p>
            För att få mer uppfattning om vårat arbete så kan ni gå till vårat
            bildgalleri där vi har bilder från jobb som vi utfört. Vi fixar det
            mesta.
          </p>
        </MainText>
        <StyledLink
          to="/pictures/"
          activeStyle={{
            color: "var(--nbu-blue)",
            textDecoration: "underline",
          }}
        >
          {"Bildgalleri \u2192"}
        </StyledLink>
        <SubTitle>Lång erfarenhet</SubTitle>
        <MainText>
          <p>
            Vi har funnits sedan 2005 och haft många nöjda kunder under dessa
            år. Företaget består av två personer, Urban Nilsson och hans son
            David.
          </p>
        </MainText>
        <SubTitle>Kontakt</SubTitle>
        <MainText>
          <p>
            Om du har några frågor eller vill ha en offert så kontakta urban på
            telefonnummer 0723 123 123, eller om du föredrar att maila på
            urban@nilssonsbyggumea.se
          </p>
        </MainText>
      </MainContainer>
    </PageContainer>
  </Layout>
)

export default IndexPage
