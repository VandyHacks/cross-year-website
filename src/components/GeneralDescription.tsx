import React from "react";
import styled from "astroturf";
import { ArrowButton } from "./ArrowButton";

const Container = styled("section")`
  display: grid;
  grid-template-columns: 10fr 8fr;
  padding: 0 10%;
  min-height: 350px;
  color: #ffffff;
`;

const TitleContainer = styled("div")`
  display: flex;
  justify-content: flex-start;
  align-items: center;
  padding-left: 25px;
`;

const DescriptionContainer = styled("div")`
  display: flex;
  flex-direction: column;
  justify-content: center;
`;

const Title = styled("h2")`
  font-size: 30px;
  font-family: Inter;
  margin: 0;
`;
const Text = styled("p")`
  font-size: 18px;
  font-family: Inter;
  font-weight: bold;
  margin: 0;
`;

export const GeneralDescription: React.FC<{
  text: string;
  title: string;
  buttonText: string;
  buttonLink: string;
}> = ({ text, title, buttonText, buttonLink }) => {
  return (
    <Container>
      <TitleContainer>
        <Title>{title}</Title>
      </TitleContainer>
      <DescriptionContainer>
        <Text>{text}</Text>
        <ArrowButton href={buttonLink} text={buttonText} />
      </DescriptionContainer>
    </Container>
  );
};
