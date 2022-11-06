import './App.css';
import MemeCreator from './components/MemeCreator';
import MemeImage from './components/MemeImage';
import Navbar from './components/Navbar';

function App() {
  return (
    <div className="App">
      <Navbar/>
        <div>
          <MemeCreator/>
          <MemeImage/>
        </div>
      MEME
    </div>
  );
}

export default App;
