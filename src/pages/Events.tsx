import React from "react"

import EventsBox from "../components/events/eventBox"
import {PageLinks} from "../components/PageLinks"

const Events: React.FC<{}> = () => (
    <div>
        <h1>Events Page</h1>
        <EventsBox />
        <PageLinks />
    </div>
)

export default Events;