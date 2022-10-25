import 'bootstrap/dist/css/bootstrap.css';
import './App.css';
import GetPlayers from './Components/GetPlayers';
import Pitch from './Components/Pitch';
// import Greeting from './Components/Greeting';

function App() {
  return (
    <div className="App">
      {/* <Greeting/> */}
      <GetPlayers/>
      <Pitch/>

    </div>
  );
}

export default App;
