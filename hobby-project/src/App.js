import 'bootstrap/dist/css/bootstrap.css';
import './App.css';
import {
  BrowserRouter as Router, Link, Route, Routes
} from 'react-router-dom';
import {Col, Row, Nav, Container} from 'react-bootstrap';

import TeamSheet from './Components/TeamSheet';
// import GetPlayers from './Components/FetchPlayerSM';
import Pitch from './Components/Pitch';

function App() {
  return (
    <div className="App">
      <Router>
        <Nav>
          <Container>
            <Row>
              <Col>
                <Link to="/">Home</Link>
              </Col>
              <Col>
                <Link to="/TeamSheet">TeamSheet</Link>
              </Col>
            </Row>
          </Container>
        </Nav>
        <Routes>
          <Route path="/" element={<Pitch/>}/>
          <Route path="/TeamSheet" element={<TeamSheet/> }/>
        </Routes>
      </Router>
      
      {/* <GetPlayers/> */}
    </div>
  );
}

export default App;
