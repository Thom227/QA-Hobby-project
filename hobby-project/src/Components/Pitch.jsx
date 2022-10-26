import LW from './Positions/LW';
import Position from './Positions/Position';
import {Container, Row, Col} from 'react-bootstrap';
import PlayerTable from './Props/Table';

const Pitch = () => {
    return(
        <div style={{
        backgroundImage: `url("https://conceptdraw.com/a1970c3/p1/preview/640/pict--soccer-field-template-end-zone-view-association-football-pitch---template.png--diagram-flowchart-example.png")`,
        backgroundRepeat: "no-repeat",
        backgroundSize: "contain",
        height:580, width:750 }}>
            <Container>
                <br/><br/><br/><br/><br/><br/>
                <Row style={{heigth: ''}}>
                    <Col md={{span: 1, offset: 3}} >
                        <LW/>
                    </Col>
                    <Col md={{span: 2, offset: 1}}>
                        <Position position="ST" />
                    </Col>
                    <Col md={{span: 1, offset: 1}}>
                        <Position position="RW" />
                    </Col>                                              
                </Row>
                <br/><br/><br/><br/>
                <Row>
                <Col md={{span: 1, offset: 3}} >
                    <Position position="CM" />
                    </Col>
                    <Col md={{span: 2, offset: 1}}>
                        <Position position="CAM" />
                    </Col>
                    <Col md={{span: 1, offset: 1}}>
                        <Position position="CM" />
                    </Col>                         
                </Row>
                <br/><br/><br/><br/>
                <Row>
                    <Col md={{span: 1, offset: 2}} >
                        <Position position="LB" />
                    </Col>
                    <Col md={{span: 2, offset: 1}}>
                        <Position position="CB" />
                    </Col>
                    <Col md={{span: 1, offset: 1}}>
                        <Position position="CB" />
                    </Col>
                    <Col md={{span: 1, offset: 1}}>
                        <Position position="RB" />
                    </Col>  
                </Row>
                <br/><br/>
                <Row>
                    <Col md={{span: 2, offset: 5}}>
                        <Position position="GK" />
                    </Col>
                </Row>
            </Container>
            <PlayerTable/>
        </div>
    );
}
export default Pitch;