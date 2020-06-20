import React, { MouseEvent } from "react"
import styled from "astroturf";
import { string } from "prop-types";


const Container = styled("section")`
  display: grid;
  grid-template-columns: 50vw 50vw;
  padding: 0 10%;
  color: #ffffff;
  align-items: center;
  background-color: #001EDE;
  height: 20vh;
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

const EmailContainer = styled("form")`
  display: flex;
  justify-content: left;
`;

const EmailInput = styled("input")`
  width: 30vw;
  height: 5vh;
  border-radius: 10px;
`;

export const EmailNotifications: React.FC<{}> = () => {
    return (
        <Container>
            <TitleContainer>
                <Title>
                    Sign up for Email Notifications
                </Title>
            </TitleContainer>
            <EmailContainer>
                <EmailInput type="text" placeholder="error@gmail.com" id="myInput"/>
            </EmailContainer>
        </Container>
    );
};
