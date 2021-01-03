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

const about: React.FC<{}> = () => (
  <body className="about">
    <PageLinks />
    <MissionStatement 
      title="about Us"
      text={
        `VandyHacks is an undergraduate student organization dedicated to fostering a more inclusive computer science community and innovative "hacker culture" at Vanderbilt University. We accomplish this mission by hosting free workshops, collaborative study nights, and our signature hackathon: an annual, 36-hour software development marathon where hundreds of attendees come together to ideate and build both fun and practical projects.`
      }
    />
    <NextVandyHackAnnouncement />
    <Members />
    <Footer />
  </body>
)

export default about;
