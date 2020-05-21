import React from "react"
import { Link } from "gatsby"

import Layout from "../components/layout"
import SEO from "../components/seo"

import MissionStatement from "../components/about/MissionStatement"
import NextVandyHackAnnouncement from "../components/about/NextVandyHack"
import Members from "../components/about/Members"

const About = () => (
  <div>
    <h1>About Page</h1>
    <MissionStatement />
    <NextVandyHackAnnouncement />
    <Members />
    <Link to="/">Go back to the homepage</Link>
    <p></p>
    <Link to="/Events/">Events Page</Link>
  </div>
  // <Layout>
  //   <SEO title="Page two" />
  //   <h1>Hi from the second page</h1>
  //   <p>Welcome to page 2</p>
  //   <Link to="/">Go back to the homepage</Link>
  // </Layout>
)

export default About;
