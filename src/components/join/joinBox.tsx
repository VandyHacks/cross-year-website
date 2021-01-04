import React, { MouseEvent } from "react"
import styled from "astroturf";
import { string } from "prop-types";

const ANecessaryEvil = styled("div")`
  display: grid;
  grid-template-columns: 100vw;
`

const Container = styled("section")`
  display: flex;
  padding: 5vh;
  color: #ffffff;
  align-items: center;
  justify-content: space-evenly;
  flex-wrap: wrap;
  background-color: #001EDE;
  margin: 5vh 0 5vh 0;
`;

const Link = styled("a")`
  font-family: Inter;
  margin: 8px;
  text-decoration: none;
  color: #ffffff;
`;

const JoinLink = styled("a")`
  background: #ffffff;
  width: 200px;
  padding: 20px;
  border-radius: 8px;
  font-weight: bold;
  text-decoration: none;
  color: #001EDE;
  text-align: center;
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

export const JoinBox: React.FC<{}> = () => {
    return (
      <ANecessaryEvil>
        <Container className="join-content">
          <Link href='https://medium.com/@z.annaw19/vandyhacks-board-committees-2020-3496106048e0' target='_blank' className='underline-button'>
              1. Learn about the application
          </Link>
          <Link href='https://medium.com/@z.annaw19/vandyhacks-board-committees-2020-3496106048e0' target='_blank' className='underline-button'>
              2. Learn about our committees
          </Link>
          <JoinLink href='https://join.vandyhacks.org/' target='_blank' className='zoom-button'>3. Apply!</JoinLink>
        </Container>
      </ANecessaryEvil>
    );
};
