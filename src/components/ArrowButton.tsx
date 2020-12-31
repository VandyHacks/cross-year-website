import React from "react";
import styled from "astroturf";
// import RightArrow from "../assets/icons/right_arrow.svg";
import PlayButton from "../assets/icons/PlayButton.svg"


const Container = styled("a")`
  display: flex;
  justify-content: flex-end;
  align-items: center;
  text-decoration: none;
  cursor: pointer;
  padding-top: 10px;
`;
const Text = styled("p")`
  font-size: 15px;
  font-family: Inter;
  font-weight: bold;
  margin: 0;
  color: #ff9086;
  margin-right: 1em;
`;

export const ArrowButton: React.FC<{ text: string; href: string }> = ({
  text,
  href,
}) => {
  return (
    <Container href={href}>
      <Text>{text}</Text>
      <PlayButton width="32" height="16"/>
    </Container>
  );
};
