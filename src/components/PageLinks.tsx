import React from "react";
import styled from "astroturf";
import VHLogo from "../assets/icons/VH_Home_Logo.svg";

const Container = styled("div")`
  position: fixed;
  width: 100vw;
  z-index: 2;
  display: grid;
  color: #ffffff;
  backdrop-filter: blur(6px);
  padding: 2.5vh 0 2.5vh 1em;
  -moz-box-shadow: 1px 2px 3px rgba(0, 0, 0, 0.5);
  -webkit-box-shadow: 1px 2px 3px rgba(0, 0, 0, 0.5);
  box-shadow: 1px 2px 3px rgba(0, 0, 0, 0.5);
`;

const TextContainer = styled("a")`
  display: flex;
  justify-content: flex-start;
  align-items: left;
  text-decoration: none;
  cursor: pointer;
`;

const Text = styled("p")`
  display: flex;
  justify-content: center;
  align-items: center;
  font-size: 1rem;
  font-family: Inter;
  font-weight: 300;
  margin: 0;
  color: #ffffff;
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
      <VHLogo width="60" height="60" className="zoom-button" />
    </HomeContainer>
    <TextContainer className="headers-content" href="/about">
      <Text className="underline-button">ABOUT</Text>
    </TextContainer>
    <TextContainer className="headers-content" href="/events">
      <Text className="underline-button">EVENTS</Text>
    </TextContainer>
    <TextContainer className="headers-content" href="/join">
      <Text className="underline-button">JOIN</Text>
    </TextContainer>
  </Container>
);
