import React from "react"
import {PageLinks} from "../../components/PageLinks";
import {Footer} from "../../components/Footer";
import "../../components/events/events.scss"
import totalEvents from '../../components/events/events.json';

const Events2019: React.FC<{}> = () => {
    return(
        <body style={{backgroundImage: "None", backgroundColor: totalEvents[1].BackgroundColor}}>
            <div className="timeline-header">
                <PageLinks />
                <div className="timeline-container" style={{backgroundColor: `${totalEvents[1].BackgroundColor}`}}>
                    {/* TODO: This should REALLY be in a map function but I couldn't get it working so here we are with terrible code */}
                    <div className="timeline">
                        <section className="timeline-item" data-text={totalEvents[1].Information[0].Title} id={totalEvents[1].Information[0].Title}>
                            {/* TODO: Kinda dumb but you need to have a bit of the string static or else Webkit starts to complain */}
                            <div className="timeline__content"><img className="timeline__img" src={require(`../../images/${totalEvents[1].Information[0].Image}`)}/>
                                <p className="timeline__content-desc">{totalEvents[1].Information[0].Description}</p>
                            </div>
                        </section>
                        <section className="timeline-item" data-text={totalEvents[1].Information[1].Title } id={totalEvents[1].Information[1].Title}>
                            <div className="timeline__content"><img className="timeline__img" src={require(`../../images/${totalEvents[1].Information[1].Image}`)}/>
                                <p className="timeline__content-desc">{totalEvents[1].Information[1].Description}</p>
                            </div>
                        </section>
                        <section className="timeline-item" data-text={totalEvents[1].Information[2].Title} id={totalEvents[1].Information[2].Title}>
                            <div className="timeline__content"><img className="timeline__img" src={require(`../../images/${totalEvents[1].Information[2].Image}`)}/>
                                <p className="timeline__content-desc">{totalEvents[1].Information[2].Description}</p>
                            </div>
                        </section>
                    </div>
                </div>
                <Footer />
            </div>
        </body>
    );
};

export default Events2019; 