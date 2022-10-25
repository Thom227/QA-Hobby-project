import {Button, Form} from 'react-bootstrap';
import { useState } from 'react';
import GetPlayers from './GetPlayers'
import CreatePlayer from './Props/CreatePlayerOldFormat';

const PitchOld = () => {
    const [show, setShow] = useState(false);

    const HandleClick = e => {
        setShow(current => !current);
    };
    
    return(
        <div>            
            <div style={{
            backgroundImage: `url("https://conceptdraw.com/a1970c3/p1/preview/640/pict--soccer-field-template-end-zone-view-association-football-pitch---template.png--diagram-flowchart-example.png")`,
            backgroundRepeat: "no-repeat",
            backgroundSize: "contain",
            height:450, width:600 }}>
                <div>                
                    <Button variant="outline-success" onClick={HandleClick}> LW </Button>
                    <Button variant="outline-success" onClick={HandleClick}> ST </Button>
                    <Button variant="outline-success" onClick={HandleClick}> RW </Button>
                </div>
                <br/>
                
                <div>
                    <Button variant="outline-success" onClick={HandleClick}> CM </Button>
                    <Button variant="outline-success" onClick={HandleClick}> CAM </Button>
                    <Button variant="outline-success" onClick={HandleClick}> CM </Button>
                </div>
                <br/>

                <div>
                    <Button variant="outline-success" onClick={HandleClick}> LB </Button>
                    <Button variant="outline-success" onClick={HandleClick}> CB </Button>
                    <Button variant="outline-success" onClick={HandleClick}> CB </Button>
                    <Button variant="outline-success" onClick={HandleClick}> RB </Button>
                </div>
                <br/>

                <div>
                    <Button variant="outline-success" onClick={HandleClick}> GK </Button>
                </div>                
            </div>
            {show && (
                    <Form>
                        <Form.Group classname="mb-3" controlId="inputPlayer">
                            <GetPlayers/>
                            <CreatePlayer/>
                        </Form.Group>
                                           
                    </Form>
                )}
        </div>        
    );
}
export default PitchOld;