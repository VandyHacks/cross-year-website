import React from "react"
import styled from "astroturf";

const Container = styled("section")`
  display: grid;
  grid-template-columns: 60vw;
  grid-template-rows: 10vh 20vh; 
  padding: 0 10%;
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
  font-size: 40px;
  font-family: Inter;
  margin: 0;
`;

const Text = styled("p")`
  font-size: 18px;
  font-family: Inter;
  font-weight: bold;
  margin: 0;
`;

export const BoardApps: React.FC<{
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
