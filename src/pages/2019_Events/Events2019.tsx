import React from "react"
import styled from "astroturf";
import {HelloWorld} from "./HelloWorld"
import {VandyHacksVI} from "./VandyHacksVI"
import {PageLinks} from "../../components/PageLinks";
import {Footer} from "../../components/Footer";
import "./2019Events.scss"


export const Events2019: React.FC<{}> = () => (
    <div className="timeline-container" id="timeline-1">
    <PageLinks />
    <div className="timeline">
        <div className="timeline-item" data-text="FATHER OF THE TURKS">
        <div className="timeline__content"><img className="timeline__img" src="http://i.cdn.ensonhaber.com/resimler/diger/ataturk_3473.jpg"/>
            <h2 className="timeline__content-title">1881</h2>
            <p className="timeline__content-desc">He was born in 1881 (probably in the spring) in Salonica, then an Ottoman city, now inGreece. His father Ali Riza, a customs official turned lumber merchant, died when Mustafawas still a boy. His mother Zubeyde, adevout and strong-willed woman, raised him and his sister.</p>
        </div>
        </div>
        <div className="timeline-item" data-text="FATHER OF THE TURKS">
        <div className="timeline__content"><img className="timeline__img" src="http://gazetemanifesto.com/wp-content/uploads/2015/11/mustafa-kemal.jpg"/>
            <h2 className="timeline__content-title">1893</h2>
            <p className="timeline__content-desc">First enrolled in a traditionalreligious school, he soon switched to a modern school. In 1893, he entered a military highschool where his mathematics teacher gave him the second name Kemal (meaning perfection)in recognition of young Mustafa's superior achievement.</p>
        </div>
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