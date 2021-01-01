import React from "react"
import styled from "astroturf";
import VHLogo from "../assets/icons/VH_Home_Logo.svg"

const Container = styled("div")`
  position: fixed;
  width: 90 vw;
  left: 0;
  right: 18px;
  z-index: 2;
  display: grid;
  color: #ffffff;
  backdrop-filter: blur(6px);
  padding-top: 4vh;
  padding-bottom: 4vh;
  padding-left: 1em;
`;

const TextContainer = styled("a")`
  display: flex;
  justify-content: flex-start;
  align-items: left;
  text-decoration: none;
  cursor: pointer;
`;

const Text = styled("p")`
  font-size: 1rem;
  font-family: Inter;
  font-weight: 300;
  margin: 0;
  color: #FFFFFF;
`;

const HomeContainer = styled("a")`
  display: flex;
  justify-content: flex-start;
  align-items: left;
  text-decoration: none;
  cursor: pointer;
  padding-left: 2%;
`;


export const PageLinks: React.FC<{}> = () => (
    <Container className="headers">
      <HomeContainer href="/" className="headers-content">
        <VHLogo width="45" height="45" />
      </HomeContainer>
      <TextContainer className="headers-content" href="/About" >
        <Text>About</Text>
      </TextContainer>
      <TextContainer className="headers-content" href="/Events">
        <Text>Events</Text>
      </TextContainer>
      <TextContainer className="headers-content" href="/Join">
        <Text>Join</Text>
      </TextContainer>
    </Container>
);

