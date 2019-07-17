import React from 'react';

import MemoryBasedMedia from './components/MemoryBasedMedia';
// ray test touch <
import WebGLCar from './components/WebGLCar';
// ray test touch >
import './App.css';

const App = () => {
  return (
    <div className="App">
      {/* ray test touch < */}
      {/* <header className="App-header">
        <MemoryBasedMedia />
      </header> */}
      <WebGLCar />
      {/* ray test touch > */}
    </div>
  );
};

export default App;
