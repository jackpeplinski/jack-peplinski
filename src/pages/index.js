import React from 'react'
import styled from 'styled-components'
import { ThemeProvider } from 'styled-components'
import { StaticImage } from 'gatsby-plugin-image'
import '../styles/Global.css'
import P from '../components/P'
import ExperienceItem from '../components/ExperienceItem'
import wfnLogo from '../images/wfnLogo.png'

const IndexPage = () => {
  return (
    <ThemeProvider theme={Theme}>
      <Content>
        <Page>
          <WelcomeGrid>
            <Wave>
              <WaveEmoji>👋🏼</WaveEmoji>
            </Wave>
            <Greeting>
              <P>Hi there, my name's</P>
            </Greeting>
            <Name>
              <H1>Jack Peplinski</H1>
            </Name>
            <Media>
              <div className="grid-container">
                <a href="https://www.linkedin.com/in/jack-peplinski/" target="_blank">
                  <div className="linkedin" alt="LinkedIn Logo"><StaticImage src="../images/linkedinLogo.png" alt="LinkedIn logo" /></div>
                </a>
                <a href="https://medium.com/@jackepeplinski" target="_blank">
                  <div className="medium" alt="Medium Logo"><StaticImage src="../images/mediumLogo.png" alt="Medium logo" /></div>
                </a>
                <a href="https://github.com/jackpeplinski" target="_blank">
                  <div className="github" alt="GitHub Logo"><StaticImage src="../images/githubLogo.png" alt="GitHub logo" /></div>
                </a>
                <a href="https://www.youtube.com/channel/UCUzGQccUiegJ8nHxUBG0taA" target="_blank">
                  <div className="youtube" alt="YouTube Logo"><StaticImage src="../images/youtubeLogo.png" alt="YouTube logo" /></div>
                </a>
              </div>
            </Media>
          </WelcomeGrid>
          <ProfileImage>
            <StaticImage src="../images/profileShotBackground.png" alt="Headshot of Jack Peplinski" />
          </ProfileImage>
        </Page>
        <Page>
          <AboutMeText>
            <H1>About me</H1>
            <P padding>I’m a software engineering student @WesternUniversity in Ontario. </P>
            <P padding>I’m originally from Calgary, Alberta; have two sisters;
          and a dog, Finn 🐶.</P>
            <P padding>I like playing volleyball 🏐, reading 📖, and boxing 🥊 among other things.</P>
          </AboutMeText>
          <Memoji>
            <StaticImage src="../images/memoji.png" alt="Memoji of Jack Peplinski" />
          </Memoji>
        </Page>
        <div>
          <H1>My experience</H1>
          <ExperienceItem title="Senior Caveman" date="550AD–320BC" description="Enjoyed. Meat." src={wfnLogo} alt="WFN logo" />
        </div>
      </Content>
    </ThemeProvider>
  )
}

export default IndexPage

const Theme = {
  fontXLarge: "54px",
  fontLarge: "36px",
  fontMedium: "36px",
  fontSmall: "16px",
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
  margin: 8vw 0vw 8vw 12vw;
`
const Page = styled.div`
  display: flex;
  flex-wrap: wrap;
`
const WelcomeGrid = styled.div`
  display: grid;
  grid-template-columns: 1fr 1fr 1fr 1fr;
  grid-template-rows: 1fr 1fr 1fr;
  gap: 0px 0px;
  grid-template-areas:
    "wave welcome welcome welcome"
    "wave name name name"
    "wave media media media";
`
const Greeting = styled.div`
  grid-area: welcome; 
  vertical-align: text-bottom;
`
const Name = styled.div`
  grid-area: name;
`
const Media = styled.div`
  grid-area: media;
  margin: 3% 0 0 0;
`
const Wave = styled.div`
  grid-area: wave;
`
const WaveEmoji = styled.div`
  font-size: 100px;
  text-align: right;
  position: relative;
  right: 25%;
`
const ProfileImage = styled.div`
  @media ${device.minLaptop} {
    position:absolute;
    right:-5%;
    top:-.5%;
  }
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