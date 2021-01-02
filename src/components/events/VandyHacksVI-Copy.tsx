import React from "react"
import styled from "astroturf";


import events from "./events.json"
import "./events.scss"

var name:string = "VandyHacksVI";
var title:string =  "../../images/some_weird_guy.png";
var event1Description:string = "../../images/some_weird_guy.png";
var event2Description:string = "../../images/some_weird_guy.png";
var event1title:string = "../../images/some_weird_guy.png";
var event2title:string = "../../images/some_weird_guy.png";
var bgcolor:string = "../../images/some_weird_guy.png";
var image1:string = "../../images/some_weird_guy.png";
var image2:string = "../../images/some_weird_guy.png";
var BackgroundImage:string = "../../images/some_weird_guy.png";
var scroll : string = "../../images/some_weird_guy.png";

export const VandyHacksVI: React.FC<{}> = () => (
  <div className="timeline">
    <div className="timeline-item" data-text={title}>
    <div className="timeline__content"><img className="timeline__img" src={image1}/>
        <h2 className="timeline__content-title">{event1title}</h2>
        <p className="timeline__content-desc">{event1Description}</p>
    </div>
    </div>
    <div className="timeline-item" data-text={title}>
      <div className="timeline__content"><img className="timeline__img" src={image2}/>
          <h2 className="timeline__content-title">{event2title}</h2>
          <p className="timeline__content-desc">{event2Description}</p>
      </div>
    </div>
  </div>
);
