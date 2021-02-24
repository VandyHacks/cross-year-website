import React from "react"
import { graphql } from "gatsby"
import {PageLinks} from "../components/PageLinks";
import {Footer} from "../components/Footer";
import "../components/events/events.scss"

interface eventsProps {
    data: {
        eventsJson: {
            Information: {
                Description: string,
                Image: string, 
                Title: string
            }[],
            BackgroundColor: string
        }
    }
}

const events2020: React.FC<eventsProps> = ({ data }) => {
    const info = data.eventsJson.Information;
    const bg = data.eventsJson.BackgroundColor;
    const timelineItems = info.map((item) => (
        <div className="timeline-item" data-text={item.Title} key={item.Title}>
            {/* TODO: Kinda dumb but you need to have a bit of the string static or else Webkit starts to complain */}
            <div className="timeline__content"><img className="timeline__img" src={require(`../images/${item.Image}`)}/>
                <p className="timeline__content-desc">{item.Description}</p>
            </div>
        </div>
    ));
    return(
        <body style={{backgroundImage: "None", backgroundColor: bg}}>
            <div className="timeline-header">
                <PageLinks />
                <div className="timeline-container" style={{backgroundColor: `${bg}`}}>
                    <div className="timeline">
                        {timelineItems}
                    </div>
                </div>
                <Footer />
            </div>
        </body>
    );
};

export const query = graphql`
  query($slug: String!) {
    eventsJson(fields: { slug: { eq: $slug } }) {
        BackgroundColor
    Information {
      Description
      Image
      Title
    }
  }
}`

export default events2020; 