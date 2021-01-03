import React from "react"
import styled from "astroturf";

import {PageLinks} from "../components/PageLinks"
import {Footer} from "../components/Footer"
import { BoardApps } from "../components/join/boardApps";
import { JoinBox } from "../components/join/joinBox";

// const Main = styled("body")`
//   width: 100vw;
//   background-color: #0000DE;
//   display: grid;
//   grid-template-columns: 100vw;
//   background-image: url("../images/Big_VH_Logo.png");
//   background-repeat: no-repeat;
// `;


const join: React.FC<{}> = () => (
    <body className="join">
        <PageLinks />
        <BoardApps 
        title="2021 Board Applications - Open through January 20th, 2021"
        text={
            "With 7 different committees (Content, Design, Development, Hacker Experience, Marketing, Operations, and Sponsorship), VandyHacks definitely has something for you! We warmly welcome all years and majors; our top priority is to bring together a group filled with genuine enthusiasm and creative energy. You can learn more about VandyHacks and our application process below."
        }
        />
        <JoinBox />
        <Footer />
    </body>
)

export default join;