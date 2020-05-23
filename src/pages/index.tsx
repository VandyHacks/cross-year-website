import React from "react"

import NextVandyHackAnnouncement from "../components/about/NextVandyHack"
import PageLinks from "../components/PageLinks"

const IndexPage: React.FC<IndexPageProps> = (props: IndexPageProps) => (
  <div>
    <h1>Cross-Year Website Homepage</h1>
    <NextVandyHackAnnouncement />
    <PageLinks />
  </div>
)

export default IndexPage
