import React from "react"
import { Link } from "gatsby"

import EventsBox from "../components/events/eventBox"

const Events = () => (
    <div>
        <h1>Events Page</h1>
        <EventsBox Title="Event 1" Description="Something happened here"></EventsBox>
        <EventsBox Title="Event 2" Description="Something happened here"></EventsBox>
    </div>
)

export default Events;