import React from "react"
import './panel.scss'

export const EventsBox: React.FC<{}> = () => {
    return (
    <section id="timeline">
    <div className="tl-item">
      <div className="T1BG2017" />
      <div className="year">
        <p>2019</p>
      </div>
      <div className="tl-content">
        <a className="text-container" href="/Events/2019">
          <p className="text-container-text">VandyHacks VI</p>
        </a>
        <a className="text-container" href="/Events/2019#HelloWorld">
          <p className="text-container-text">Hello World</p>
        </a>
      </div>
    </div>
    <div className="tl-item">
      <div className="T1BG2018" />
      <div className="year">
        <p>2018</p>
      </div>
      <div className="tl-content">
        <h1>Lorem ipsum dolor sit</h1>
        <p>Something better than nothing</p>
      </div>
    </div>
    <div className="tl-item">
      <div className="T1BG2019" />
      <div className="year">
        <p>2017</p>
      </div>
      <div className="tl-content">
        <h1>Lorem ipsum dolor sit</h1>
        <p>Something better than nothing</p>
      </div>
    </div>
    </section>
    );  
};