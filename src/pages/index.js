import React from "react"
import { Link } from "gatsby"

import Layout from "../components/layout"
import Image from "../components/image"
import SEO from "../components/seo"

import styled from "styled-components"

const PageContainer = styled.div`
  display: flex;
  flex-direction: row;
  padding: 0 auto;
  width: 80%;
`
const MainContainer = styled.div`
  display: flex;
  flex: 4;
  flex-direction: column;
  align-items: center;
`
const TextContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  width: 60%;
`

const MainTitle = styled.div`
  font-size: 1.75rem;
  padding-bottom: 1.5rem;
`

const SubTitle = styled.div`
  font-size: 1.2rem;
  align-self: flex-start;
  padding-bottom: 0.5rem;
`

const MainText = styled.div`
  font-size: 1rem;
  padding-bottom: 1.5rem;
  align-self: flex-start;
`

const SideContainer = styled.div`
  flex: 1;
  background-color: white;
  padding: 1rem;
  border-radius: 10px;
  background-color: rgba(0, 0, 0, 0.25);
  box-shadow: 0px 1px 1px 1px gray;
`

const SideTitle = styled.div`
  color: white;
  text-decoration: underline;
  font-size: 1.2rem;
  padding-bottom: 0.8rem;
`

const SideInfo = styled.div`
  color: white;
  padding-bottom: 0.8rem;
`

const IndexPage = () => (
  <Layout>
    <SEO title="Hem" />
    <PageContainer>
      <MainContainer>
        <TextContainer>
          <MainTitle>Din snickare i Umeå</MainTitle>
          <MainText>
            Vi är ett byggföretag som bryr sig om kundernas bästa.
          </MainText>
          <SubTitle>Bred kompetens</SubTitle>
          <MainText>
            Vi kan hjälpa er med det mesta inom bygg. Nybyggnation, ROT-jobb,
            kakling, grunder, yttertak med mera.
          </MainText>
        </TextContainer>
      </MainContainer>
      <SideContainer>
        <SideTitle>Om oss</SideTitle>
        <SideInfo>
          Nilssons bygg Umeå startades 2005 och jobbar i Umeå med omnejd. Det
          finns två anställda på företaget, Urban och hans son David.
        </SideInfo>
        <SideTitle>Kontakt</SideTitle>
        <SideInfo>
          Om ni undrar någonting eller vill ha en offert, ring Urban på
          telefonnummer: 0732 121 212
        </SideInfo>
      </SideContainer>
    </PageContainer>
  </Layout>
)

export default IndexPage
