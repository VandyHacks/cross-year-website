import React from "react"
import styled from "astroturf";
import VHLogo from "../assets/icons/VH_Home_Logo.svg"

const Container = styled("div")`
  display: grid;
  grid-template-columns: 5fr 1fr 1fr 1fr 1fr;
  grid-template-rows: 10fr;
  color: #ffffff;
  padding-top: 1%;
`;

const TextContainer = styled("a")`
  display: flex;
  justify-content: flex-start;
  align-items: left;
  text-decoration: none;
  cursor: pointer;
`;

const Text = styled("p")`
  font-size: 20px;
  font-family: Inter;
  font-weight: regular;
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
    <Container>
      <HomeContainer href="./">
        <VHLogo width="45" height="45" />
      </HomeContainer>
      <TextContainer href="./About" >
        <Text>About</Text>
      </TextContainer>
      <TextContainer href="./Events">
        <Text>Events</Text>
      </TextContainer>
      <TextContainer href="./Join">
        <Text>Join</Text>
      </TextContainer>
      <TextContainer href="./Hackathons">
        <Text>Hackathons</Text>
      </TextContainer>
    </Container>
);

