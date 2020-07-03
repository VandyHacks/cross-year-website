import React from "react"
import styled from "astroturf";

import events from "./events.json"

const T1BG2017 = styled("div")`
  transform: translate3d(0, 0, 0);
  position: absolute;
  width: 100%; height: 100%;
  top: 0; left: 0;
  background-size: cover;
  background-position: center center;
  transition: filter 0.5s ease;
  background-image: url("../../images/2017_Image.svg");
`;

const T1BG2018 = styled("div")`
  transform: translate3d(0, 0, 0);
  position: absolute;
  width: 100%; height: 100%;
  top: 0; left: 0;
  background-size: cover;
  background-position: center center;
  transition: filter 0.5s ease;
  background-image: url("../../images/2018_image.jpg");
`;

const T1BG2019 = styled("div")`
  transform: translate3d(0, 0, 0);
  position: absolute;
  width: 100%; height: 100%;
  top: 0; left: 0;
  background-size: cover;
  background-position: center center;
  transition: filter 0.5s ease;
  background-image: url("../../images/2019_image.jpg");
`;

const T1Year = styled("div")`
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translateX(-50%) translateY(-250%);
  z-index: 1;
  border-top: 1px solid #fff;
  border-bottom: 1px solid #fff;
  
  p {
    font-family: 'Pathway Gothic One',Helvetica Neue,Helvetica,Arial,sans-serif;
    font-size: 3rem;
    line-height: 0;
  }
`;

const T1Content = styled("div")`
  transform: translate3d(0, 0, 0) translateY(25px);
  position: relative;
  z-index: 1;
  text-align: center;
  margin: 0 1.618em;
  top: 55%;
  opacity: 0;
  
  h1 {
    font-family: 'Pathway Gothic One',Helvetica Neue,Helvetica,Arial,sans-serif;
    text-transform: uppercase;
    color: #1779cf;
    font-size: 1.44rem;
    font-weight: normal;
  }
`;

const T1Item = styled("div")`
  transform: translate3d(0, 0, 0);
  position: relative;
  width: 33.33%;
  height: 75vh;
  color: #fff;
  overflow: hidden;
  transition: width 0.5s ease;
  
  &:before, &:after {
    transform: translate3d(0, 0, 0);
    content: '';
    position: absolute;
    left: 0; top: 0;
    width: 100%; height: 100%;
  }

  &:after {
    background: transparentize(#031625, 0.15);
    opacity: 1;
    transition: opacity 0.5s ease;
  }

  &:before {
    background: linear-gradient(to bottom, rgba(0,0,0,0) 0%,rgba(0,0,0,1) 75%);
    z-index: 1;
    opacity: 0;
    transform: translate3d(0, 0, 0) translateY(50%);
    transition: opacity 0.5s ease, transform 0.5s ease;
  }

  &:hover {
    width: 30% !important;
    
    &:after {
      opacity: 0;
    }

    &:before {
      opacity: 1;
      transform: translate3d(0, 0, 0) translateY(0);
      transition: opacity 1s ease, transform 1s ease 0.25s;
    }

    ${T1Content} {
      opacity: 1;
      transform: translateY(0);
      transition: all 0.75s ease 0.5s;
    }
  }
`;

const Timeline = styled("section")`
    display: flex;
    background-color: #031625;
    background-image: url("../../images/events_background.jpg");
`;



export const EventsBox: React.FC<{}> = () => {
    return (
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
    );  
};