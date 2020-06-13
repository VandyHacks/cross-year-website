import React from "react";
import "../../global.css";

import NextVandyHackAnnouncement from "../components/about/NextVandyHack";
import PageLinks from "../components/PageLinks";
import styled from "astroturf";
import { Footer } from "../components/Footer";
import { GeneralDescription } from "../components/GeneralDescription";

const Main = styled("main")`
  width: 100vw;
  background: #0000DE;
`;

const IndexPage: React.FC = () => (
  <Main>
    <h1>Cross-Year Website Homepage</h1>
    <NextVandyHackAnnouncement />
    <PageLinks />
    <GeneralDescription
      title="VANDYHACKS VII"
      text={
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum"
      }
      buttonText="Learn more"
      buttonLink="#"
    />
    <Footer />
  </Main>
);

export default IndexPage;
