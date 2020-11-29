import React from "react";
import { styled, css} from "astroturf";
import Facebook from "../assets/icons/facebook.svg";
import Github from "../assets/icons/github.svg";
import Instagram from "../assets/icons/instagram.svg";
import Twitch from "../assets/icons/twitch.svg";
import Twitter from "../assets/icons/twitter.svg";
import Youtube from "../assets/icons/youtube.svg";

const FooterContainer = styled("footer")`
  width: 100%;
  color: #ffffff;
  left: 0;
  bottom: 2vh;
  background-color: #ff9086;
  height: 125px;
  display: grid;
  grid-template-columns: 15fr 15fr 30fr 25fr;
  padding: 0 5%;
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
`;

const Title = styled("h3")`
  font-family: Inter;
  font-size: 14px;
  writing-mode: sideways-lr;
  font-weight: normal;
  text-orientation: mixed;
  text-transform: uppercase;
  padding-right: 1em;
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

const IconLink = styled(Link)`
  margin-right: 0.9em;
`;

const Pudding = styled("div")`
  width: 100%;
  left: 0;
  opacity: 0;
  padding-top: 5vh;
`;

export const Footer: React.FC<{}> = () => (
  <>
  <FooterContainer>
    <InfoWrapper>
      <Title>Links</Title>
      <InfoContainer>
        <Link href="#">Applications</Link>
        <Link href="https://static.mlh.io/docs/mlh-code-of-conduct.pdf">Code of Conduct</Link>
        <Link href="#">About</Link>
      </InfoContainer>
    </InfoWrapper>
    <InfoWrapper>
      <Title>Companies</Title>
      <InfoContainer>
        {/* <Link href="#">Our sponsors</Link> */}
        <Link href="#">Sponsorship Contacts</Link>
      </InfoContainer>
    </InfoWrapper>
    <InfoWrapper>
      <Title>Social Media</Title>
      <IconsContainer>
        <IconLink href="https://www.facebook.com/vandyhacks/" target="_blank">
          <Facebook width="45" height="45" />
        </IconLink>
        <IconLink href="https://www.instagram.com/vandyhacks/" target="_blank">
          <Instagram width="45" height="45" />
        </IconLink>
        <IconLink href="https://twitter.com/vandyhacks" target="_blank">
          <Twitter width="45" height="45" />
        </IconLink>
        <IconLink href="https://www.youtube.com/channel/UC-sXkznjkmHLjpA5nlfdswg/" target="_blank">
          <Youtube width="45" height="45" />
        </IconLink>
        <IconLink href="https://www.twitch.tv/vandyhacks" target="_blank">
          <Twitch width="45" height="45" />
        </IconLink>
        <IconLink href="https://github.com/VandyHacks" target="_blank">
          <Github width="45" height="45" />
        </IconLink>
      </IconsContainer>
    </InfoWrapper>
    <InfoWrapper>
      <Title>Contact us</Title>
      <InfoContainer>
        <Link href="#">info@vandyhacks.org</Link>
      </InfoContainer>
    </InfoWrapper>
  </FooterContainer>
  <Pudding />
  </>
);
