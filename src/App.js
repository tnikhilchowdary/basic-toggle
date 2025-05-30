import logo from './logo.svg';
import './App.css';
import { useState } from 'react';

function App() {
  const [isVisible, setIsvisible] = useState(false);
  const handleToggle = () => {
    setIsvisible(!isVisible);
  };

  return (
    <div className="App">
     <button onClick={handleToggle}>
      {isVisible ? 'Hide' : 'Show'}Text
      </button>
      {isVisible && <p>This is the toggled text!</p>}
    </div>
  );
}

export default App;
