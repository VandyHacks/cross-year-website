import React from "react"

import EventsBox from "../components/events/eventBox"
import PageLinks from "../components/PageLinks"

const Events = () => (
    <div>
        <h1>Events Page</h1>
        <EventsBox Title="Event 1" Description="Something happened here"></EventsBox>
        <EventsBox Title="Event 2" Description="Something happened here"></EventsBox>
        <PageLinks />
    </div>
)

export default Events;