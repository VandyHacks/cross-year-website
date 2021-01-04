import React, { useState } from "react";
import members from "./members.json";
import styled from "astroturf";


const Container = styled("section")`
	display: grid;
	grid-template-columns: 80vw;
	padding: 0 10%;
	color: #ffffff;
	margin-bottom: 10%;
`;

const TitleContainer = styled("div")`
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
	align-items: left;
	margin-bottom: 5vh;
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

const MemberContainer = styled("div")`
	display: flex;
	flex-direction: column;
	align-items: center;
`

const MemberName = styled("p")`
	font-weight: bold;
	text-align: center;
`

const ImageContainer = styled("div")`
	border-radius: 18px;
	width: 180px;
	height: 240px;
	box-shadow: 0 10px 15px rgba(0, 0, 0, 0.4);
	overflow: hidden;
	display: block;
`;

const MemberImage = styled("img")`
	width: 180px;
	height: 240px;
`

const MemberDesc = styled("div")`
	background-color: #ff9086;
	padding: 10px;
	width: 160px;
	height: 220px;
	overflow-y: auto;
`

const Text = styled("p")`
	font-size: 10px;
	margin-bottom: -8px;
`

interface MemberCheck {
		name: string,
		image: string,
		role: string,
		from: string,
		year: string,
		enjoy: string
}

function randomizeMembers(array: MemberCheck[]): MemberCheck[] {
    for (let i = array.length - 1; i > 0; i--) {
        let j = Math.floor(Math.random() * (i + 1));
        [array[i], array[j]] = [array[j], array[i]];
    }
    return array;
}

//random array Object
let randomArray: MemberCheck[] = randomizeMembers(members);

export const Members: React.FC<{}> = () => {
    // const [displayAll, toggleDisplayAll] = useState(0)
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
                        <MemberContainer>
							<ImageContainer className="zoom-image">
								<MemberImage src = {value.image} alt={value.image}/>
								<MemberDesc>
								<Text><b>Role:</b> {value.role}</Text>
								<Text><b>Year:</b> {value.year}</Text>
								<Text><b>Home:</b> {value.from}</Text>
								<Text><b>What do you like most about your committee?</b></Text>
								<Text>{value.enjoy}</Text>
								</MemberDesc>
							</ImageContainer>
							<MemberName>{value.name}</MemberName>
                        </MemberContainer>
                    )
                })}
            </MembersContainer>
        </Container>
    );
};