import React from "react"
import styled from "astroturf";

import {PageLinks} from "../../components/PageLinks";
import {Footer} from "../../components/Footer"
import events from "../../components/events/events.json"

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
var nextPage : string = events[name].nextPage;

const Main = styled("body")`
  width: 100vw;
  height: 100vh;
  color : #ffffff;
  display: grid;
  grid-template-columns: 100vw;
  grid-template-rows: 7vh 15vh 60vh 13vh;
  background-image : url("../../images/VandyHacksVIBackground.png");
  background-position: center;
  background-repeat: no-repeat;
  background-size: 50% auto
`;

const TitleContainer = styled("div")`
  display: flex;
  justify-content: center;
  align-items: flex-end;
`;

const Title = styled("h2")`
  font-size: 60px;
  font-family: Inter;
  margin: 0;
`;

const DescriptionContainer = styled("div")`
  display: grid;
  justify-content: center;
  grid-template-columns: 50vw 50vw;
`;

const EventContainer = styled("div")`
  display: grid;
  grid-template-rows: 30vh 30vh;
`;

const Event1Container = styled("div")`
  display: flex;
  flex-direction: column;
  justify-content: center;
  justify-content: flex-start;
  padding-left: 10vw;
  padding-right: 5vw;
`;

const Event2Container = styled("div")`
  display: flex;
  flex-direction: column;
  justify-content: flex-end;
  padding-right: 10vw;
  padding-left: 5vw;
  padding-bottom: 3vh;
`;

const EventTitle = styled("h3")`
  font-size: 20px;
  font-family: Inter;
  margin: 0;
`;

const EventText = styled("p")`
  font-size: 20px;
  font-family: Inter;
  margin: 0;
`;

const ImageDivLeft = styled("div")`
  display: flex;
  justify-content: space-evenly;
  padding-right: 5vw;
  padding-left: 1vw;
  padding-bottom: 3%;
  padding-top: 3%;
`;

const LeftImage = styled("img")`
  justify-content: flex-end;
  border-radius: 10%;
  max-width: 50%;
  height: auto;
  overflow:hidden
`;

const ImageDivRight = styled("div")`
  display: flex;
  justify-content: flex-end;
  padding-right: 30%;
  padding-left: 20%;
  padding-bottom: 3%;
  padding-top: 3%;
`;

const RightImage = styled("img")`
  justify-content: flex-end;
  border-radius: 10%;
  max-width: 50%;
  height: auto;
`;

const ScrollContainer = styled("a")`
  justify-content: center;
  text-decoration: none;
  cursor: pointer;
`;

const ScrollImage = styled("img")`
  justify-content: center;
  max-width: 100%;
  height: auto;
`;



export const VandyHacksVI: React.FC<{}> = () => (
  <Main style={{backgroundColor : bgcolor}}>
      <PageLinks />
      <TitleContainer>
        <Title>{title}</Title>
      </TitleContainer>
      <DescriptionContainer>
        <EventContainer>
          <Event1Container>
            <EventTitle>{event1title}</EventTitle>
            <EventText>{event1Description}</EventText>
          </Event1Container>
          <ImageDivLeft>
            <LeftImage src={image1} alt={image1}/>
          </ImageDivLeft>
        </EventContainer>
        <EventContainer>
          <ImageDivRight>
            <RightImage src={image2} alt={image2}/>
          </ImageDivRight>
          <Event2Container>
            <EventTitle>{event2title}</EventTitle>
            <EventText>{event2Description}</EventText>
          </Event2Container>
        </EventContainer>
      </DescriptionContainer>
      <Footer/>
  </Main>
);
