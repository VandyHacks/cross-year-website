import React from "react"

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