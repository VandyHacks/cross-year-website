import React from "react";
import styled from "astroturf";
import "../../global.css";

import {PageLinks} from "../components/PageLinks";
import { Footer } from "../components/Footer";
import { GeneralDescription } from "../components/GeneralDescription";

/* Commented out because refactor to global.css, use plain body instead */
// const Main = styled("body")`
//   @import url('https://fonts.googleapis.com/css2?family=Inter&display=swap');
//   width: 100vw;
//   background-color: #0000DE;
//   background-image: url("../images/Big_VH_Logo.png");
//   background-size: auto 84vh;
//   background-position: bottom 20px right 100px;
//   background-repeat: no-repeat;
// `;

const GeneralBodyContainer = styled("div")`
  display: grid;
  grid-template-columns: 80vw;
  padding: 0 10%;
  color: #ffffff;
  margin-top: 15vh;
`;

const Padding = styled("div")`
  display: grid;
  grid-template-rows: 15vh;
`

const IndexPage: React.FC = () => (
  <body>
    <PageLinks />
    <GeneralBodyContainer>
      <GeneralDescription
        title="Welcome to VandyHacks!"
        text1={
          `Our 2021/VH VIII Board applications have closed, and we are ecstatic about all our new members!`
        }
        text2={
          `Click here to learn more about VandyHacks and what we do as an organization. We hope to see your application for VH XI!`
        }
        // subText="RETRO"
        buttonText="Learn more"
        buttonLink="./join"
      />
    </GeneralBodyContainer>
    <Padding/>
    <Footer />
  </body>
);

export default IndexPage;
