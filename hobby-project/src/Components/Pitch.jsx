// import React from 'react';

import LW from "./Positions/LW";
import RW from "./Positions/RW";
import ST from "./Positions/ST";

const Pitch = () => {

    const handleClick = e => {
            
    };
    return(
        <div style={{
            backgroundImage: `url("https://conceptdraw.com/a1970c3/p1/preview/640/pict--soccer-field-template-end-zone-view-association-football-pitch---template.png--diagram-flowchart-example.png")`,
            width: '351 px', height: '270.38 px', margin: '0 px'
            }}>
            <div>
                <LW/>
                <ST/>
                <RW/>
            </div>

            <br/>
            
            <div>
                <button>CM</button>
                <button>CAM</button>
                <button>CM</button>
            </div>
            <br/>

            <div>
                LB
                CB
                CB
                RB
            </div>
            <br/>

            <div>
                GK
            </div>


        </div>

    );
}
export default Pitch;