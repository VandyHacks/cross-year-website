import React from "react"
import member from "./members.json"
import styled from "astroturf";

const Container = styled("section")`
  display: grid;
  grid-template-columns: 80vw;
  grid-template-rows: 10vh 50vh; 
  padding: 0 10%;
  color: #ffffff;
`;

const TitleContainer = styled("div")`
  display: flex;
  justify-content: flex-start;
  align-items: left;
`;

const Title = styled("h2")`
  font-size: 40px;
  font-family: Inter;
  margin: 0;
`;

const MemberContainer = styled("div")`
  display: grid;
  grid-template-columns: repeat(5, 1fr);
  grid-gap: 3vw;
  grid-auto-row: 50vw;
  align-items: start;
`;

const IndividualImage = styled("img")`
    width: 12vw;
    height: 25vh;
`;

interface MemberCheck {
    image:string
}

function randomizeMembers(array: MemberCheck[]): MemberCheck[] {
    for (let i = array.length - 1; i > 0; i--) {
        let j = Math.floor(Math.random() * (i + 1));
        [array[i], array[j]] = [array[j], array[i]];
    }
    return array;
}

//random array Object
let randomArray: MemberCheck[] = randomizeMembers(member);

export const Members: React.FC<{}> = () => (
    <Container>
        <TitleContainer>
            <Title>
                Members
            </Title>
        </TitleContainer>
        <MemberContainer>
            {randomArray.map(value => {
                return (
                    <IndividualImage src = {value.image} alt={value.image} />
                )
            })}
        </MemberContainer>
    </Container>
);