import React, { useRef } from 'react';
import './App.css';
import Main from './Components/Main';
import Header from './Components/Header';
import Footer from './Components/Footer';

function App() {
  let ref = useRef();

  const handlePlayagain = () => {
    ref.current.handlePlayAgain();
  };

  const handleHintClick = () => {
    ref.current.handleHintClick();
  };
  console.log(window.innerWidth);
  return (
    <div className="App">
      <Header />
      <Main ref={ref} />
      <Footer
        handlePlayagain={handlePlayagain}
        handleHintClick={handleHintClick}
      />
    </div>
  );
}

export default App;
