import React from "react"
import styled from "astroturf";

const Container = styled("section")`
  display: flex;
  flex-direction: column;
  padding: 20vh 10% 5vh 10%;
  color: #ffffff;
`;

const TitleContainer = styled("div")`
  display: flex;
  justify-content: flex-start;
  align-items: left;
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

export const MissionStatement: React.FC<{
    title: string;
    text: string;
}> = ({title, text}) => {
    return (
        <Container>
            <TitleContainer>
                <Title>{title}</Title>
            </TitleContainer>
            <DescriptionContainer>
                <Text>{text}</Text>
            </DescriptionContainer>
        </Container>
    );
};
