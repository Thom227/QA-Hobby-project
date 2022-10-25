import LW from './Positions/LW';
import Position from './Positions/Position';
import CreateCard from './Props/CreateCard';

const Pitch = () => {
    return(
        <div>            
            <div style={{
            backgroundImage: `url("https://conceptdraw.com/a1970c3/p1/preview/640/pict--soccer-field-template-end-zone-view-association-football-pitch---template.png--diagram-flowchart-example.png")`,
            backgroundRepeat: "no-repeat",
            backgroundSize: "contain",
            height:450, width:600 }}>
                <div>
                    <LW/>
                    <Position position="ST" />
                    <Position position="RW" />
                </div>
                <br/>
                
                <div>
                    <CreateCard/>
                    <Position position="CM" />
                    <Position position="CAM" />
                    <Position position="CM" />
                </div>
                <br/>

                <div>
                    <Position position="LB" />
                    <Position position="CB" />
                    <Position position="CB" />
                    <Position position="RB" />
                </div>
                <br/>

                <div>
                    <Position position="GK" />
                </div>                
            </div>
        </div>        
    );
}
export default Pitch;