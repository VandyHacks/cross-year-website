import React from "react"
import styled from "astroturf";

import {PageLinks} from "../components/PageLinks"
import {Footer} from "../components/Footer"
import { BoardApps } from "../components/join/boardApps";
import { EmailNotifications } from "../components/join/emailNotifications";

const Main = styled("body")`
  width: 100vw;
  height: 100vh;
  background-color: #0000DE;
  display:grid;
  grid-template-columns: 100vw;
  grid-template-rows: 7vh 30vh 40vh 13vh;
  background-image: url("../images/Big_VH_Logo.png");
  background-repeat: no-repeat;
  background-size: 40%; 
`;


const Join: React.FC<{}> = () => (
    <Main>
        <PageLinks />
        <BoardApps 
        title="Board Applications in January"
        text={
            "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum"
        }
        />
        <EmailNotifications />
        <Footer />
    </Main>
)

export default Join;