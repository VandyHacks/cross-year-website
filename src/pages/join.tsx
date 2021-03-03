import React from "react"
import styled from "astroturf";

import {PageLinks} from "../components/PageLinks"
import {Footer} from "../components/Footer"
import { BoardApps } from "../components/join/boardApps";
import { JoinBox } from "../components/join/joinBox";

const Padding = styled("div")`
  display: grid;
  grid-template-rows: 25vh;
`
// const Main = styled("body")`
//   width: 100vw;
//   background-color: #0000DE;
//   display: grid;
//   grid-template-columns: 100vw;
//   background-image: url("../images/Big_VH_Logo.png");
//   background-repeat: no-repeat;
// `;


const join: React.FC<{}> = () => (
    <body>
        <PageLinks />
        <BoardApps 
            title="VH VIII Board Applications on January 20th, 2021"
            text={
                "While we have closed our applications for this season, we still invite you to learn more about our organization. With 7 different committees (Content, Design, Development, Hacker Experience, Marketing, Operations, and Sponsorship), VandyHacks definitely has something for you! We warmly welcome all years and majors; our top priority is to bring together a group filled with genuine enthusiasm and creative energy. You can learn more about VandyHacks and our application process below."
            }
        />
        <JoinBox />
        <Padding />
        <Footer />
    </body>
)

export default join;
