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

const ButtonInput = styled("button")`
  display:none
`;

function foo(){
  var input = document.getElementById("myInput");
  input.addEventListener("keyup", function(event) {
    if (event.keyCode === 13) {
     event.preventDefault();
     document.getElementById("myBtn").click();
    }
  });
  var strInput: string = input.value;
  console.log(strInput)
  alert(strInput)
}

export const EmailNotifications: React.FC<{}> = () => {
    return (
        <Container>
            <TitleContainer>
                <Title>
                    Sign up for Email Notifications
                </Title>
            </TitleContainer>
            <EmailContainer>
                <EmailInput type="email" placeholder="email@gmail.com" id="myInput" />
                <ButtonInput onClick={foo} id="myBtn" />
            </EmailContainer>
        </Container>
    );
};
