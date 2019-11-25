import React from "react"
import Layout from "../components/layout"
import SEO from "../components/seo"
import styled from "styled-components"
import phone from "../assets/phone.svg"
import mail from "../assets/mail.svg"

const PageContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
`

const MainContainer = styled.div`
  display: flex;
  align-items: flex-start;
  flex-direction: column;
  width: 60%;
`

const LinkContainer = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  margin-bottom: 1rem;
`

const Link = styled.a`
  display: flex;
  flex-direction: row;
  text-decoration: none;
  color: var(--nbu-gray);
`

const ContactPage = () => {
  return (
    <Layout>
      <SEO title="Kontakt"></SEO>
      <PageContainer>
        <MainContainer>
          <h1>Kontakt</h1>
          <h2>Telefon</h2>
          <p>Ring Urban om ni har några frågor eller vill få en offert:</p>
          <LinkContainer>
            <Link href="tel:+46738160858">
              <img
                src={mail}
                alt="mail-icon"
                style={{ paddingRight: "0.5rem" }}
              />
              0731 - 123 123
            </Link>
          </LinkContainer>
          <h2>Mail</h2>
          <p>Om ni föredrar att maila går även detta alldeles utmärkt:</p>
          <LinkContainer>
            <Link href="mailto:urban@nilssonsbyggumea.se">
              <img
                src={phone}
                alt="phone-icon"
                style={{ paddingRight: "0.5rem" }}
              />
              urban@nilssonsbyggumea.se
            </Link>
          </LinkContainer>
        </MainContainer>
      </PageContainer>
    </Layout>
  )
}

export default ContactPage
