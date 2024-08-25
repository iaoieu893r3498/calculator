import React from 'react';
import './App.css';
import Calculator from './Calculator';

function App() {
  return (
      <div className="App" style={{ background: 'white', display: 'flex', justifyContent: 'center', alignItems: 'center' }}>
          <Calculator />
      </div>
  );
}

export default App;