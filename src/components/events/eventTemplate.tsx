import React from "react"
import styled from "astroturf";

import events from "./events.json"
import "./events.scss"

export const HelloWorld: React.FC<{ title : string, image: string, desc : string }> = 
  ({ title, image, desc }) => {
    return(
  <div className="timeline">
    <div className="timeline-item" data-text={title}>
      {/* TODO: Kinda dumb but you need to have a bit of the string static or else Webkit starts to complain */}
      <div className="timeline__content"><img className="timeline__img" src={require(`../../images/${image}`)}/>
          <p className="timeline__content-desc">{desc}</p>
      </div>
    </div>
    <div className="timeline-item" data-text={title}>
      {/* TODO: Kinda dumb but you need to have a bit of the string static or else Webkit starts to complain */}
      <div className="timeline__content"><img className="timeline__img" src={require(`../../images/${image}`)}/>
          <h2 className="timeline__content-title">{title}</h2>
          <p className="timeline__content-desc">{desc}</p>
      </div>
    </div>
    <div className="timeline-item" data-text={title}>
      {/* TODO: Kinda dumb but you need to have a bit of the string static or else Webkit starts to complain */}
      <div className="timeline__content"><img className="timeline__img" src={require(`../../images/${image}`)}/>
          <h2 className="timeline__content-title">{title}</h2>
          <p className="timeline__content-desc">{desc}</p>
      </div>
    </div>
  </div>
    );
    };

