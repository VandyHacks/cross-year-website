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
  background-image: url("../images/Big_VH_Logo.png");
  background-size: auto 84vh;
  background-position: bottom;
  background-repeat: no-repeat;
`;

const GeneralBodyContainer = styled("div")`
  display: grid;
  grid-template-columns: 80vw;
  padding: 0 10%;
  color: #ffffff;
  margin-top: 15vh;
  height: 200px;
`;


const IndexPage: React.FC = () => (
  <Main className="index-main">
    <PageLinks />
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
        buttonLink="./Join"
      />
    </GeneralBodyContainer>
    <Footer />
  </Main>
);

export default IndexPage;
