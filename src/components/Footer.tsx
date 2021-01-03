import React from "react";
import { styled, css} from "astroturf";
import Facebook from "../assets/icons/facebook.svg";
import Github from "../assets/icons/github.svg";
import Instagram from "../assets/icons/instagram.svg";
import Twitch from "../assets/icons/twitch.svg";
import Twitter from "../assets/icons/twitter.svg";
import Youtube from "../assets/icons/youtube.svg";

const FooterContainer = styled.footer`
  width: 100%;
  color: #ffffff;
  left: 0;
  bottom: 2vh;
  background-color: #ff9086;
  display: grid;
  padding: 2em 5%;
`;

const InfoWrapper = styled("div")`
  min-width: 150px;
  box-sizing: border-box;
`;

const InfoContainer = styled("div")`
  display: flex;
  flex-direction: column;
  justify-content: center;
`;

const IconsContainer = styled("div")`
  display: flex;
  justify-content: left;
  align-items: center;
  width: 100%;
`;

const Title = styled("h3")`
  font-family: Inter;
  font-size: 14px;
  font-weight: bold;
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
  <FooterContainer className="foot">
    <InfoWrapper className="footerInfoWrapper">
      <Title className="footerTitle">Links</Title>
      <InfoContainer>
        <Link href="https://apply.vandyhacks.org/">Applications</Link>
        <Link href="https://static.mlh.io/docs/mlh-code-of-conduct.pdf">Code of Conduct</Link>
      </InfoContainer>
    </InfoWrapper>
    <InfoWrapper className="footerInfoWrapper">
      <Title className="footerTitle">Companies</Title>
      <InfoContainer>
        {/* <Link href="#">Our sponsors</Link> */}
        <Link href="mailto:sponsorship@vandyhacks.org">Contact Sponsorship</Link>
      </InfoContainer>
    </InfoWrapper>
    <InfoWrapper className="footerInfoWrapper">
      <Title className="footerTitle">Social Media</Title>
      <IconsContainer>
        <IconLink href="https://www.facebook.com/vandyhacks/" target="_blank">
          <Facebook className="socialButton" />
        </IconLink>
        <IconLink href="https://www.instagram.com/vandyhacks/" target="_blank">
          <Instagram className="socialButton" />
        </IconLink>
        <IconLink href="https://twitter.com/vandyhacks" target="_blank">
          <Twitter className="socialButton" />
        </IconLink>
        <IconLink href="https://www.youtube.com/channel/UC-sXkznjkmHLjpA5nlfdswg/" target="_blank">
          <Youtube className="socialButton" />
        </IconLink>
        <IconLink href="https://www.twitch.tv/vandyhacks" target="_blank">
          <Twitch className="socialButton" />
        </IconLink>
        <IconLink href="https://github.com/VandyHacks" target="_blank">
          <Github className="socialButton" />
        </IconLink>
      </IconsContainer>
    </InfoWrapper>
    <InfoWrapper className="footerInfoWrapper">
      <Title className="footerTitle">Contact us</Title>
      <InfoContainer>
        <Link href="mailto:info@vandyhacks.org">info@vandyhacks.org</Link>
      </InfoContainer>
    </InfoWrapper>
  </FooterContainer>
  <Pudding />
  </>
);
