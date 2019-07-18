import React from 'react';

import MemoryBasedModelViewer from './containers/MemoryBasedModelViewer';

import './App.css';

const App = () => {
  return (
    <div className="App">
      <header className="App-header">
        <MemoryBasedModelViewer />
      </header>
    </div>
  );
};

export default App;
