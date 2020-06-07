import React from "react";
import "../../global.css";

import NextVandyHackAnnouncement from "../components/about/NextVandyHack";
import PageLinks from "../components/PageLinks";
import { Footer } from "../components/Footer";

const IndexPage: React.FC<IndexPageProps> = (props: IndexPageProps) => (
  <div>
    <h1>Cross-Year Website Homepage</h1>
    <NextVandyHackAnnouncement />
    <PageLinks />
    <Footer />
  </div>
);

export default IndexPage;
