import React from "react";
import styled from "astroturf";
import "../../global.css";

import {PageLinks} from "../components/PageLinks";
import { Footer } from "../components/Footer";
import { GeneralDescription } from "../components/GeneralDescription";

const Main = styled("body")`
@import url('https://fonts.googleapis.com/css2?family=Inter&display=swap');
  width: 100vw;
  background-color: #0000DE;
  display:grid;
  grid-template-columns: 100vw;
  
  background-image: url("../images/Big_VH_Logo.png");
  background-repeat: no-repeat;
`;

const GeneralBodyContainer = styled("div")`
  display: grid;
  grid-template-columns: 80vw;
  padding: 0 10%;
  color: #ffffff;
  margin-top: 15vh;
`;


const IndexPage: React.FC = () => (
  <Main className="index-main">
    <PageLinks />
    <GeneralBodyContainer className="index-content">
      <GeneralDescription
        title="VANDYHACKS VII"
        text={
          "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum"
        }
        subText="RETRO"
        buttonText="Learn more"
        buttonLink="#"
      />
    </GeneralBodyContainer>
    <Footer />
  </Main>
);

export default IndexPage;
