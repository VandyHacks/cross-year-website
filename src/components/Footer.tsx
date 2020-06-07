import React from "react";
import styled from "astroturf";
import Facebook from "../assets/icons/facebook.svg";
import Github from "../assets/icons/github.svg";
import Instagram from "../assets/icons/instagram.svg";
import Twitch from "../assets/icons/twitch.svg";
import Twitter from "../assets/icons/twitter.svg";
import Youtube from "../assets/icons/youtube.svg";

const FooterContainer = styled("footer")`
  width: 100vw;
  color: #ffffff;
  background-color: #ff9086;
  height: 125px;
  display: grid;
  grid-template-columns: 20fr 15fr 30fr 25fr;
  padding: 0 10%;
`;

const InfoWrapper = styled("div")`
  display: flex;
  min-width: 150px;
  box-sizing: border-box;
  justify-content: flex-start;
`;

const InfoContainer = styled("div")`
  display: flex;
  flex-direction: column;
  justify-content: center;
`;

const IconsContainer = styled("div")`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 100%;

  a:not(:last-child) {
    padding-right: 3em;
  }
`;

const Title = styled("h3")`
  font-family: Inter;
  font-size: 14px;
  writing-mode: sideways-lr;
  font-weight: normal;
  text-orientation: mixed;
  text-transform: uppercase;
  padding-right: 2em;
  margin: auto 0;
`;

const Link = styled("a")`
  font-family: Inter;
  font-size: 14px;
  font-weight: normal;
  text-decoration: none;
  color: #ffffff;
  padding-bottom: 2px;
`;

export const Footer: React.FC<{}> = () => (
  <FooterContainer>
    <InfoWrapper>
      <Title>Links</Title>
      <InfoContainer>
        <Link href="#">Applications</Link>
        <Link href="#">Code of Conduct</Link>
        <Link href="#">About</Link>
      </InfoContainer>
    </InfoWrapper>
    <InfoWrapper>
      <Title>Companies</Title>
      <InfoContainer>
        <Link href="#">Our sponsors</Link>
        <Link href="#">Contacts</Link>
      </InfoContainer>
    </InfoWrapper>
    <InfoWrapper>
      <Title>Social Media</Title>
      <IconsContainer>
        <Link href="#" target="_blank">
          <Facebook width="45" height="45" />
        </Link>
        <Link href="#" target="_blank">
          <Instagram width="45" height="45" />
        </Link>
        <Link href="#" target="_blank">
          <Twitter width="45" height="45" />
        </Link>
        <Link href="#" target="_blank">
          <Youtube width="45" height="45" />
        </Link>
        <Link href="#" target="_blank">
          <Twitch width="45" height="45" />
        </Link>
        <Link href="#" target="_blank">
          <Github width="45" height="45" />
        </Link>
      </IconsContainer>
    </InfoWrapper>
    <InfoWrapper>
      <Title>Contact us</Title>
      <InfoContainer>
        <Link href="#">help@vandyhacks.sh</Link>
      </InfoContainer>
    </InfoWrapper>
  </FooterContainer>
);