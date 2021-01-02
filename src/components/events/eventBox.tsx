import React from "react"
import './panel.scss'
import styled from "astroturf";
import totalEvents from './events.json';

const T1BG = styled('div')`
  transform: translate3d(0, 0, 0);
  position: absolute;
  width: 100%; height: 100%;
  top: 0; left: 0;
  bottom: 0;
  background-size: cover;
  background-position: center center;
  transition: filter 0.5s ease;  
`
export const EventsBox: React.FC<{}> = () => {

    const allYears = totalEvents.map((year) => {
      
      const eventsThisYear = year.Information.map((event) => {
        return(
        <a className="text-container" href={"/Events/".concat(year.Year).concat('/#').concat(event.Title)}>
          <p className="text-container-text">{event.Title}</p>
        </a>);
      });

      return (
        <div className="tl-item">
          <T1BG className={`T1BG${year.Year}`}/>
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