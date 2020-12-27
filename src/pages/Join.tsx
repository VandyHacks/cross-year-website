import React from "react"
import styled from "astroturf";

import {PageLinks} from "../components/PageLinks"
import {Footer} from "../components/Footer"
import { BoardApps } from "../components/join/boardApps";
import { EmailNotifications } from "../components/join/emailNotifications";

const Main = styled("body")`
  width: 100vw;
  background-color: #0000DE;
  display: grid;
  grid-template-columns: 100vw;
  background-image: url("../images/Big_VH_Logo.png");
  background-repeat: no-repeat;
`;


const Join: React.FC<{}> = () => (
    <Main className="join">
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