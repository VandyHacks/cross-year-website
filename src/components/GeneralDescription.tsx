import React from "react";
import styled from "astroturf";
import { ArrowButton } from "./ArrowButton";
// import TextArrow from "../assets/icons/PlayButton.svg"

const Container = styled("section")`
  width: 30vw;
  height: 20vh;
  display: flex;
  flex-direction: column;
  color: #ffffff;
  padding: 3vh 3vw;
  margin: 8vh 2vw;
`;

const TitleContainer = styled("div")`
display: flex;
justify-content: left;
align-items: center;
`;

const DescriptionContainer = styled("div")`
  display: flex;
  flex-direction: column;
`;

const Title = styled("h2")`
  font-family: Inter;
  margin: 0;
`;
const Text = styled("p")`
  font-family: Inter;
`;

const ArrowContainer = styled("div")`
  display: flex;
  flex-direction: column;
  justify-content: center;
`;

export const GeneralDescription: React.FC<{
  text1: string;
  text2: string;
  title: string;
  buttonText: string;
  buttonLink: string;
}> = ({ text1, text2, title, buttonText, buttonLink }) => {
  return (
    <Container className="index-description">
      <TitleContainer>
        <Title>
          {title}
        </Title>
      </TitleContainer>
      <DescriptionContainer>
        <Text className="index-description-text">{text1}</Text>
        <Text className="index-description-text">{text2}</Text>
        <ArrowButton href={buttonLink} text={buttonText}/>
      </DescriptionContainer>
    </Container>
  );
};
