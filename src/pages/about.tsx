import React from "react"
import styled from "astroturf";

import {MissionStatement} from "../components/about/MissionStatement"
import {Members} from "../components/about/Members"
import {PageLinks} from "../components/PageLinks"
import { NextVandyHackAnnouncement } from "../components/about/NextVandyHack";
import {Footer} from "../components/Footer"

// const Main = styled("body")`
//   width: 100vw;
//   background-color: #0000DE;
//   display: grid;
//   grid-template-columns: 100vw;
//   background-image: url("../images/Big_VH_Logo.png");
//   background-repeat: no-repeat;
// `;
import { GeneralDescription } from "../components/GeneralDescription";

const GeneralBodyContainer = styled("div")`
  display: grid;
  grid-template-columns: 80vw;
  padding: 0 10%;
  color: #ffffff;
  margin-top: 15vh;
`;

const about: React.FC<{}> = () => (
  <body>
    <PageLinks />
    {/* <MissionStatement 
      title="About Us"
      text={
        `VandyHacks is an undergraduate student organization dedicated to fostering a more inclusive computer science community and innovative "hacker culture" at Vanderbilt University. We accomplish this mission by hosting free workshops, collaborative study nights, and our signature hackathon: an annual, 36-hour software development marathon where hundreds of attendees come together to ideate and build both fun and practical projects.`
      }
    />
    <NextVandyHackAnnouncement />
    <Members /> */}
    <GeneralBodyContainer className="index-content">
      <GeneralDescription
        title="Board Applications Open!"
        text1={
          `Welcome to VandyHacks! Our 2021/VH VIII Board applications are currently open until 11:59 PM CST on January 20th, 2021.`
        }
        text2={
          `Join us in making Vanderbilt University's computer science community an even more enjoyable, diverse, and welcoming space.`
        }
        // subText="RETRO"
        buttonText="Learn more"
        buttonLink="./join"
      />
    </GeneralBodyContainer>
    <Footer />
  </body>
)

export default about;
