import React from "react"
import styled from "astroturf";

import {EventsBox} from "../components/events/EventBox"
import {PageLinks} from "../components/PageLinks"
import {Footer} from "../components/Footer"

const Main = styled("body")`
  width: 100vw;
  height: 100vh;
  background-color: #0000DE;
  display:grid;
  grid-template-columns: 100vw;
  grid-template-rows: 75vh 13vh;
  background-image: url("../images/Big_VH_Logo.png");
  background-repeat: no-repeat;
  background-size: 40%; 
`;


const events: React.FC<{}> = () => (
    <body style={{backgroundImage: "none"}}>
        <PageLinks />
        <EventsBox />
        <Footer />
    </body>
)

export default events;