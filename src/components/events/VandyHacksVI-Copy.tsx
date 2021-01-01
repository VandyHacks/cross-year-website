import React from "react"
import styled from "astroturf";


import events from "./events.json"
import "./2019.scss"

var name:string = "VandyHacksVI";
var title:string =  events[name].Title;
var event1Description:string = events[name].Event1;
var event2Description:string = events[name].Event2;
var event1title:string = events[name].Event1Title;
var event2title:string = events[name].Event2Title;
var bgcolor:string = events[name].bgcolor;
var image1:string = events[name].Image1;
var image2:string = events[name].Image2;
var BackgroundImage:string = events[name].BackgroundImage;
var scroll : string = events[name].scroll;

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
