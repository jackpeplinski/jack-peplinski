import React from "react"
import styled from "styled-components"
import { ThemeProvider } from "styled-components"

const IndexPage = () => {
  return (
      <ThemeProvider theme={Theme}>
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
          </Media>
        </WelcomeGrid>
      </ThemeProvider>
  )
}

export default IndexPage

const Theme = {
  fontXLarge: "54px",
  fontLarge: "36px",
  fontMedium: "24px",
  fontSmall: "16px",
  fontFamily: "-apple-system, BlinkMacSystemFont, sans-serif",
}

const H1 = styled.h1`
  font-size: ${props => props.theme.fontXLarge};
  font-family: ${props => props.theme.fontFamily};
  font-weight: bold;
  margin: 0;
`

const P = styled.p`
  font-size: ${props => props.theme.fontMedium};
  font-family: ${props => props.theme.fontFamily};
  margin: 0;
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
`

const Wave = styled.div`
  grid-area: wave;
`

const WaveEmoji = styled.div`
  font-size: 100px;
  text-align: right;
  margin: 5% 5% 0 0;
`

const MediaThumbnails = styled.div`

`