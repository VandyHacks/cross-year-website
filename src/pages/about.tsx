import React from "react"

import {MissionStatement} from "../components/about/MissionStatement"
import {Members} from "../components/about/Members"
import {PageLinks} from "../components/PageLinks"
import { NextVandyHackAnnouncement } from "../components/about/NextVandyHack";
import {Footer} from "../components/Footer"

const about: React.FC<{}> = () => (
  <body>
    <PageLinks />
    <MissionStatement 
      title="About Us"
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
