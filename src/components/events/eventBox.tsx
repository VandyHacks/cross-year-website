import React from "react"
import events from "./events.json"

let eventArray :object[];
eventArray = events;


const EventsBox = () => (
    <div>
        <p>
            {eventArray.map((value, index) => {
                return (
                <p key={index}>
                    <h4>{value.Title}</h4>
                    <li>Date: {value.Date}</li>
                    <li>Description: {value.Description}</li></p>
                )
            })}
        </p>
    </div>   
)

export default EventsBox;