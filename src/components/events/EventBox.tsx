import React from "react"
import { useStaticQuery, graphql } from "gatsby"
import './panel.scss'
import styled from "astroturf";

// TODO: stupid but need to wrap in grid otherwise breaks on iOS
const iOSGrid = styled("section")`
  display: grid;
  grid-template-columns: 100vw;
  color: #ffffff;
`;

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

interface eventPreviewData {
  allEventsJson: {
      nodes: {
        Year: string,
        Information: {
          Title: string
        }[]
      }[]
  }
}
export const EventsBox: React.FC<{}> = () => {
        const data = useStaticQuery(
       graphql`
        query {
          allEventsJson {
            nodes {
              Year
              Information {
                Title
              }
            }
          }
      }`
     )
     const info = data.allEventsJson.nodes;
     const allYears = info.map((year) => {

      const eventsThisYear = year.Information.map((event) => {
        return(
        <a className="text-container" key={event.Title} href={"/events/".concat(year.Year).concat('/#').concat(event.Title)}>
          <p className="text-container-text">{`▶ ${event.Title}`}</p>
        </a>);
      });

      return (
        <div className="tl-item" key="tl-item">
          <T1BG className={`TLBG${year.Year}`}/>
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
      <iOSGrid>
        <section id="timeline">
          {allYears}
        </section>
      </iOSGrid>
    );
};

