import React from "react"
import styled from "astroturf";
import {HelloWorld} from "../../components/events/HelloWorld-Copy"
import {VandyHacksVI} from "../../components/events/VandyHacksVI-Copy"
import {PageLinks} from "../../components/PageLinks";
import {Footer} from "../../components/Footer";
import "../../components/events/2019.scss"

const Events2019: React.FC<{}> = () => (
    <div className="timeline-header">
    <PageLinks />
    <div className="timeline-container" id="timeline-1">
        <div className="timeline">
            <HelloWorld />
            <div id="HelloWorld" >
                <VandyHacksVI />
            </ div>
        </div>
    </div>
    <Footer />
    </div>
);

export default Events2019; 

/*     <body className="timeline">
        <VandyHacksVI />
        <HelloWorld />
        <a id="HelloWorld"></a>
    </body> */