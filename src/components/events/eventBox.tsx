import styled from "astroturf";
import React from "react"
import './panel.scss'

//import events from "./events.json"

const T1Year = styled("div")`
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translateX(-50%) translateY(-250%);
  z-index: 1;
`;

const T1YearFont = styled("p")`
  font-family: 'Pathway Gothic One',Helvetica Neue,Helvetica,Arial,sans-serif;
  font-size: 1.728rem;
  line-height: 0;
`;

export const EventsBox: React.FC<{}> = () => {
    return (
    <section id="timeline">
    <div className="tl-item">
      <div className="T1BG2017" />
      <T1Year>
        <T1YearFont>2019</T1YearFont>
      </T1Year>
      <div className="tl-content">
        <h1>Lorem ipsum dolor sit</h1>
        <p>Something better than nothing</p>
      </div>
    </div>
    <div className="tl-item">
      <div className="T1BG2018" />
      <T1Year>
        <T1YearFont>2018</T1YearFont>
      </T1Year>
      <div className="tl-content">
        <h1>Lorem ipsum dolor sit</h1>
        <p>Something better than nothing</p>
      </div>
    </div>
    <div className="tl-item">
      <div className="T1BG2019" />
      <T1Year>
        <T1YearFont>2017</T1YearFont>
      </T1Year>
      <div className="tl-content">
        <h1>Lorem ipsum dolor sit</h1>
        <p>Something better than nothing</p>
      </div>
    </div>
    </section>
    );  
};

/*
<section id="timeline">
<div className="tl-item">
  <div className="tl-bg" style={{backgroundImage : 'url("../../images/2018_image.jpg")'}}></div>
  <div className="t1-year">
    <p className="f2 heading--sanSerif">2011</p>
  </div>
  <div className="tl-content">
    <h1>Lorem ipsum dolor sit</h1>
    <p>Something better than nothing</p>
  </div>
</div>
</section>
*/

/*
        <Timeline>
          <T1Item>
            <T1BG2017 />
            <T1Year>
              <p>2017</p>
            </T1Year>
            <T1Content>
              <h1>VANDYHACKS VI</h1>
            </T1Content>
          </T1Item>
          <T1Item>
            <T1BG2018 />
            <T1Year>
              <p>2018</p>
            </T1Year>
          </T1Item>
          <T1Item>
            <T1BG2019 />
            <T1Year>
              <p>2019</p>
            </T1Year>
          </T1Item>
        </Timeline>
  */