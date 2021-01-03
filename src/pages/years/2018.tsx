import React from "react"
import {PageLinks} from "../../components/PageLinks";
import {Footer} from "../../components/Footer";
import "../../components/events/events.scss"
import totalevents from '../../components/events/events.json';

const events2018: React.FC<{}> = () => {
    return(
        <body style={{backgroundImage: "None", backgroundColor: totalevents[2].BackgroundColor}}>
            <div className="timeline-header">
                <PageLinks />
                <div className="timeline-container" style={{backgroundColor: `${totalevents[2].BackgroundColor}`}}>
                    {/* TODO: This should REALLY be in a map function but I couldn't get it working so here we are with terrible code */}
                    <div className="timeline">
                        <div className="timeline-item" data-text={totalevents[2].Information[0].Title}>
                            {/* TODO: Kinda dumb but you need to have a bit of the string static or else Webkit starts to complain */}
                            <div className="timeline__content"><img className="timeline__img" src={require(`../../images/${totalevents[2].Information[0].Image}`)}/>
                                <p className="timeline__content-desc">{totalevents[2].Information[0].Description}</p>
                            </div>
                        </div>
                        <div className="timeline-item" data-text={totalevents[2].Information[1].Title}>
                            <div className="timeline__content"><img className="timeline__img" src={require(`../../images/${totalevents[2].Information[1].Image}`)}/>
                                <p className="timeline__content-desc">{totalevents[2].Information[1].Description}</p>
                            </div>
                        </div>
                        <div className="timeline-item" data-text={totalevents[2].Information[2].Title}>
                            <div className="timeline__content"><img className="timeline__img" src={require(`../../images/${totalevents[2].Information[2].Image}`)}/>
                                <p className="timeline__content-desc">{totalevents[2].Information[2].Description}</p>
                            </div>
                        </div>
                        <div className="timeline-item" data-text={totalevents[2].Information[3].Title}>
                            <div className="timeline__content"><img className="timeline__img" src={require(`../../images/${totalevents[2].Information[3].Image}`)}/>
                                <p className="timeline__content-desc">{totalevents[2].Information[3].Description}</p>
                            </div>
                        </div>
                    </div>
                </div>
                <Footer />
            </div>
        </body>
    );
};

export default events2018; 