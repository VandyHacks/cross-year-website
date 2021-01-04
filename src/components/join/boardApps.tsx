import React from "react";
import styled from "astroturf";

const Container = styled("section")`
  display: grid;
  grid-template-columns: 80vw;
  padding: 20vh 10% 5vh;
  color: #ffffff;
`;

const TitleContainer = styled("div")`
  display: flex;
  justify-content: flex-start;
  align-items: center;
  margin-bottom: 6vh;
`;

const DescriptionContainer = styled("div")`
  display: flex;
  justify-content: left;
`;

const Title = styled("h2")`
  font-family: Inter;
  margin: 0;
`;

const Text = styled("p")`
  font-family: Inter;
  margin: 0;
`;

export const BoardApps: React.FC<{
  title: string;
  text: string;
}> = ({ title, text }) => {
  return (
    <Container className="join-content">
      <TitleContainer>
        <Title className="long-title">{title}</Title>
      </TitleContainer>
      <DescriptionContainer>
        <Text>{text}</Text>
      </DescriptionContainer>
    </Container>
  );
};
