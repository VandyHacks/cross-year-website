import React from "react"
import './panel.scss'
import totalEvents from './events.json';

export const EventsBox: React.FC<{}> = () => {

    const allYears = totalEvents.map((year) => {
      
      const eventsThisYear = year.Information.map((event) => {
        <a className="text-container" href={"/Events/".concat(year.Year).concat('#').concat(event.Title)}>
          <p className="text-container-text">{event.Title}</p>
        </a>
      });

      return (
        <div className="tl-item">
          <div className="T1BG" />
          <div className="year">
            <p>{year.Year}</p>
          </div>
          <div className="tl-content">
            {eventsThisYear}
          </div>
        </div>
      );
    })
    return (
    <section id="timeline">
      {allYears}
    </section>
    );  
};