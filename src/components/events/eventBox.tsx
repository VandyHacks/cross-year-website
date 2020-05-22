import React from "react"
import events from "./events.json"

interface eventCheck {
    Title: string;
    Date: string;
    Description: string;
}

let eventArray :eventCheck[] = events;


const EventsBox = () => (
    <div>
        {eventArray.map(value => {
            return (
            <div>
                <h4>{value.Title}</h4>
                <li>Date: {value.Date}</li>
                <li>Description: {value.Description}</li>
            </div>
            )
        })}
    </div>  
)

export default EventsBox;