import 'bootstrap/dist/css/bootstrap.css';
import './App.css';
// import GetPlayers from './Components/GetPlayers';
import Pitch from './Components/Pitch';
import {
  BrowserRouter as Router, Link, Route, Routes
} from 'react-router-dom';
import GetAll from './Components/GetAll';

function App() {
  return (
    <div className="App">
      <Router>
        <nav>
          <Link to="/">Home</Link>
          {" "}
          <Link to="/GetAll">Get All</Link>
        </nav>
        <Routes>
          <Route path="/" element={<Pitch/>}/>
          <Route path="/getAll" element={<GetAll/> }/>
        </Routes>
      </Router>
      
      {/* <GetPlayers/> */}
    </div>
  );
}

export default App;
