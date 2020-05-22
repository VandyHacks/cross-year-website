import React from "react"

import MissionStatement from "../components/about/MissionStatement"
import NextVandyHackAnnouncement from "../components/about/NextVandyHack"
import Members from "../components/about/Member"
import PageLinks from "../components/PageLinks"

const About = () => (
  <div>
    <h1>About Page</h1>
    <MissionStatement />
    <NextVandyHackAnnouncement />
    <Members />
    <PageLinks />
  </div>
)

export default About;
