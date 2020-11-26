import React from "react";
import styled from "astroturf";

const Container = styled("section")`
  display: grid;
  grid-template-columns: 80vw;
  grid-template-rows: 8vh 32vh; 
  padding: 0 10%;
  color: #ffffff;
`;

const TitleContainer = styled("div")`
  display: flex;
  justify-content: flex-start;
  align-items: center;
`;

const Title = styled("h2")`
  font-size: 40px;
  font-family: Inter;
  margin: 0;
`;

const Text = styled("p")`
  font-family: Inter;
  margin: 0;
`;

// TODO stype text section of the next VH component
export const NextVandyHackAnnouncement: React.FC<{}> = () => (
  <Container className="about-content">
    <TitleContainer>
      <Title>
        Upcoming Hackathons
      </Title>
      
    </TitleContainer>
    <Text>
      Stay tuned!
    </Text>
    {/* <GeneralDescription
      title="VANDYHACKS VII"
      text={
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum"
      }
      subText="RETRO"
      buttonText="Learn more"
      buttonLink="#"
    /> */}
  </Container>
);
