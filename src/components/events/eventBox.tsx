import React from "react"
import events from "./events.json"

interface EventCheck {
    Title: string;
    Date: string;
    Description: string;
}

let eventArray :EventCheck[] = events;


const EventsBox: React.FC<{}> = () => (
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