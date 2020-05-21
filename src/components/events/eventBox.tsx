import React from "react"
import { Link } from "gatsby"

//type protection
type EventProps = {
    Title: string;
    Description: string;
}

const EventsBox = (props: EventProps) => (
    <div>
        <h2>{props.Title}</h2>
        <p>{props.Description}</p>
    </div>   
)

export default EventsBox;