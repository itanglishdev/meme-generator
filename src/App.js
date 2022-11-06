import './App.css';
import MemeCreator from './components/MemeCreator';
import MemeImage from './components/MemeImage';
import Navbar from './components/Navbar';

function App() {
  return (
    <div className="App">
      <Navbar/>
        <div className='meme'>
          <MemeCreator/>
          <MemeImage/>
        </div>
    </div>
  );
}

export default App;
