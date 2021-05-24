import React from 'react'
import styled from 'styled-components'
import { ThemeProvider } from 'styled-components'
import { StaticImage } from 'gatsby-plugin-image'
import '../styles/Global.css'
import P from '../components/P'
import ExperienceItem from '../components/ExperienceItem'
import { graphql } from 'gatsby'
import { getImage } from 'gatsby-plugin-image'
import SocialMediaThumbnail from '../components/SocialMediaThumbnail'

const IndexPage = ({data}) => {
  return (
    <ThemeProvider theme={Theme}>
      <Content>
        <Page>
        <WaveEmoji>👋🏼</WaveEmoji>
          <WelcomeGrid>
            <Greeting>
              <P>Hi there, my name's</P>
            </Greeting>
            <Name>
              <H1>Jack Peplinski</H1>
            </Name>
            <SocialMedia>
                <SocialMediaThumbnail href="https://www.linkedin.com/in/jack-peplinski/" classNameProps="linkedin" alt="LinkedIn Logo" image={getImage(data.linkedinLogo)}/>
                <SocialMediaThumbnail href="https://medium.com/@jackepeplinski" classNameProps="medium" alt="Medium Logo" image={getImage(data.mediumLogo)}/>
                <SocialMediaThumbnail href="https://github.com/jackpeplinski" classNameProps="github" alt="GitHub Logo" image={getImage(data.githubLogo)} />
                <SocialMediaThumbnail href="https://www.youtube.com/channel/UCUzGQccUiegJ8nHxUBG0taA" classNameProps ="youtube" alt="YouTube Logo" image={getImage(data.youtubeLogo)}/>
            </SocialMedia>
          </WelcomeGrid>
          <StaticImage src="../images/profileShotBackground.png" alt="Headshot of Jack Peplinski"/>
        </Page>
        <Page>
          <AboutMeText>
            <H1>About me</H1>
            <P padding>I’m a software engineering student @WesternUniversity in Ontario. </P>
            <P padding>I’m originally from Calgary, Alberta; have two sisters;
          and a dog, Finn 🐶.</P>
            <P padding>I like playing volleyball 🏐, reading 📖, and kickboxing 🥊 among other things.</P>
          </AboutMeText>
          <Memoji>
            <StaticImage src="../images/memoji.png" alt="Memoji of Jack Peplinski" />
          </Memoji>
        </Page>
        <MyExperience>
          <H1>My experience</H1>
          <ExperienceItem title="Senior Caveman" date="550AD–320BC" description="Enjoyed. Meat." image={getImage(data.wfnLogo)} alt="WFN logo" />
          <ExperienceItem title="Software Monkay" date="2021" description="Got stuck on many bugs." image={getImage(data.autodeskLogo)} alt="Autodesk logo" />
        </MyExperience>
      </Content>
    </ThemeProvider>
  )
}

export default IndexPage

export const pageQuery = graphql`
  query Images {
    wfnLogo: file(relativePath: {eq: "wfnLogo.png"}) {
      childImageSharp {
        gatsbyImageData(width: 200, placeholder: BLURRED, formats: WEBP)
      }
    }
    autodeskLogo: file(relativePath: {eq: "autodeskLogo.png"}) {
      childImageSharp {
        gatsbyImageData(width: 200, placeholder: BLURRED, formats: WEBP)
      }
    }
    linkedinLogo: file(relativePath: {eq: "linkedinLogo.png"}) {
      childImageSharp {
        gatsbyImageData(width: 45, placeholder: BLURRED, formats: WEBP)
      }
    }
    mediumLogo: file(relativePath: {eq: "mediumLogo.png"}) {
      childImageSharp {
        gatsbyImageData(width: 45, placeholder: BLURRED, formats: WEBP)
      }
    }
    githubLogo: file(relativePath: {eq: "githubLogo.png"}) {
      childImageSharp {
        gatsbyImageData(width: 45, placeholder: BLURRED, formats: WEBP)
      }
    }
    youtubeLogo: file(relativePath: {eq: "youtubeLogo.png"}) {
      childImageSharp {
        gatsbyImageData(width: 45, placeholder: BLURRED, formats: WEBP)
      }
    }
  }
`
const Theme = {
  fontXLarge: "5em",
  fontLarge: "2em",
  fontMedium: "2em",
  fontSmall: "1em",
  fontFamily: "-apple-system, BlinkMacSystemFont, sans-serif",
}
const size = {
  mobileS: '320px',
  mobileM: '375px',
  mobileL: '425px',
  tablet: '768px',
  laptop: '1024px',
  laptopL: '1440px',
  desktop: '2560px'
}
const device = {
  minMobileS: `(min-width: ${size.mobileS})`,
  minMobileM: `(min-width: ${size.mobileM})`,
  minMobileL: `(min-width: ${size.mobileL})`,
  minTablet: `(min-width: ${size.tablet})`,
  minLaptop: `(min-width: ${size.laptop})`,
  minLaptopL: `(min-width: ${size.laptopL})`,
  minDesktop: `(min-width: ${size.desktop})`,
  minDesktopL: `(min-width: ${size.desktop})`,
  maxMobileS: `(max-width: ${size.mobileS})`,
  maxMobileM: `(max-width: ${size.mobileM})`,
  maxMobileL: `(max-width: ${size.mobileL})`,
  maxTablet: `(max-width: ${size.tablet})`,
  maxLaptop: `(max-width: ${size.laptop})`,
  maxLaptopL: `(max-width: ${size.laptopL})`,
  maxDesktop: `(max-width: ${size.desktop})`,
  maxDesktopL: `(max-width: ${size.desktop})`
}
const H1 = styled.h1`
  font-size: ${props => props.theme.fontXLarge};
  font-family: ${props => props.theme.fontFamily};
  font-weight: bold;
  padding: 2.5% 0 2.5% 0;
  margin: 0;
`
const Content = styled.div`
  display: flex;
  flex-direction: column;
  margin: 5vw 0vw 0vw 5vw;
`
const Page = styled.div`
  display: flex;
  flex-wrap: wrap;
`
const WelcomeGrid = styled.div`
  display: grid;
  grid-template-columns: 0fr 0fr 1fr;
  grid-template-rows: 0fr 0fr;
  gap: 0px 0px;
  grid-template-areas:
    " welcome welcome welcome"
    " name name name"
    " media media media";
`
const Greeting = styled.div`
  grid-area: welcome; 
  vertical-align: text-bottom;
`
const Name = styled.div`
  grid-area: name;
`
const SocialMedia = styled.div`
  grid-area: media;
  display: flex;
  gap: 5%;
  margin: 3% 0 0 0;
`
const WaveEmoji = styled.div`
  font-size: ${props => props.theme.fontXLarge};
  position: relative;
  right: 2.5%;
`
const AboutMeText = styled.div`
  flex: 50%;
`
const Memoji = styled.div`
  flex: 50%;
  display: flex;
  justify-content: center;
  align-items: center;
`
const MyExperience = styled.div`
  margin-right: 15vw;
`