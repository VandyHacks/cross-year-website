import React from "react";
import styled from "astroturf";
import { ArrowButton } from "./ArrowButton";
import TextArrow from "../assets/icons/PlayButton.svg"

const Container = styled("section")`
  display: grid;
  color: #ffffff;
`;

const TitleContainer = styled("div")`
  display: flex;
  justify-content: left;
  align-items: center;
`;

const DescriptionContainer = styled("div")`
  display: flex;
  flex-direction: column;
  justify-content: center;
`;

const Title = styled("h2")`
  font-family: Inter;
  margin: 0;
`;
const Text = styled("p")`
  font-family: Inter;
`;

const SubText = styled("sub")`
  font-size: 1.3rem;
  font-family: Inter;
  font-weight: bold;
  margin: 0;
  padding-right: 10px;
`;

const ArrowContainer = styled("div")`
  display: flex;
  flex-direction: column;
  justify-content: center;
`;

export const GeneralDescription: React.FC<{
  text: string;
  title: string;
  subText: string;
  buttonText: string;
  buttonLink: string;
}> = ({ text, title, subText, buttonText, buttonLink }) => {
  return (
    <Container className="index-description">
      <TitleContainer>
        <Title>
          {title}
          <SubText>
            {subText}
          </SubText>
        </Title>
        <ArrowContainer>
          <TextArrow width="55" height = "30"/>
        </ArrowContainer>
      </TitleContainer>
      <DescriptionContainer>
        <Text className="index-description-text">{text}</Text>
        <ArrowButton href={buttonLink} text={buttonText} />
      </DescriptionContainer>
    </Container>
  );
};
