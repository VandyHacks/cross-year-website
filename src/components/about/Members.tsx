import React, { useState } from "react";
import member from "./members.json";
import styled from "astroturf";

const Container = styled("section")`
	display: flex;
	flex-direction: column;
  padding: 0 10%;
  color: #ffffff;
`;

const TitleContainer = styled("div")`
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  align-items: left;
`;

const Title = styled("h2")`
  font-family: Inter;
  margin: 0;
`;

const MembersContainer = styled("div")`
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(180px, 1fr));
  grid-gap: 3vw;
  grid-auto-row: 50vw;
  align-items: start;
`;

const IndividualImage = styled("img")`
    border-radius: 18px;
    width: 180px;
    height: 240px;
    box-shadow: 0 10px 15px rgba(0, 0, 0, 0.4);
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

// const Member: React.FC<{src: string, alt: string, name: string, role: string, from: string, year: string, enjoy: string}> =
//     (src, alt, name, role, from, year, enjoy) => {
    
// }

export const Members: React.FC<{}> = () => {
    const [displayAll, toggleDisplayAll] = useState(0)
    return(
        <Container className="about-content">
            <TitleContainer>
                <Title>
                    Members
                </Title>
                <p>The VandyHacks Board consists of 40+ organizers who are committed to creating learning experiences that are accessible and applicable to all. Meet the team below!</p>
            </TitleContainer>
            <MembersContainer>
                {randomArray.map(value => {
                    return (
											<IndividualImage src = {value.image} alt={value.image} className="zoom-button"/>
                    )
                })}
            </MembersContainer>
        </Container>
    );
};