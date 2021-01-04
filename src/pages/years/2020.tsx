import React from "react";
import { PageLinks } from "../../components/PageLinks";
import { Footer } from "../../components/Footer";
import "../../components/events/events.scss";
import totalevents from "../../components/events/events.json";

const events2020: React.FC<{}> = () => {
  const timelineItems = totalevents[0].Information.map(item => (
    <div className="timeline-item" data-text={item.Title}>
      {/* TODO: Kinda dumb but you need to have a bit of the string static or else Webkit starts to complain */}
      <div className="timeline__content">
        <img
          className="timeline__img"
          src={require(`../../images/${item.Image}`)}
        />
        <p className="timeline__content-desc">{item.Description}</p>
      </div>
    </div>
  ));
  return (
    <body
      style={{
        backgroundImage: "None",
        backgroundColor: totalevents[0].BackgroundColor
      }}
    >
      <div className="timeline-header">
        <PageLinks />
        <div
          className="timeline-container"
          style={{ backgroundColor: `${totalevents[0].BackgroundColor}` }}
        >
          {/* TODO: This should REALLY be in a map function but I couldn't get it working so here we are with terrible code */}
          <div className="timeline">{timelineItems}</div>
        </div>
        <Footer />
      </div>
    </body>
  );
};

export default events2020;
