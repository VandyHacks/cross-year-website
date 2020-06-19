import React from "react"

import {MissionStatement} from "../components/about/MissionStatement"
import {Members} from "../components/about/Member"
import {PageLinks} from "../components/PageLinks"
import styled from "astroturf";
import { NextVandyHackAnnouncement } from "../components/about/NextVandyHack";

const Main = styled("section")`
  width: 100vw;
  height: 250vh;
  background-color: #0000DE;
  display:grid;
  grid-template-columns: 100vw;
  grid-template-rows: 10vh 20vh 50vh 50vh;
  background-image: url("../images/Big_VH_Logo.png");
  background-repeat: no-repeat;
  background-size: 40%; 
`;

const About: React.FC<{}> = () => (
  <Main>
    <PageLinks />
    <MissionStatement 
      title="About Us"
      text={
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum"
      }
    />
    <NextVandyHackAnnouncement />
    <Members />
  </Main>
)

export default About;
