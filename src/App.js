import React from 'react';
import './App.css';

import Tiler from "./components/tiler";


function App() {
  return (
    <div className="App">

      <div className="banner">
        <h1 className="title">Triomino Tiling Visualizer</h1>
      </div>

      <Tiler />

      <div className="footer banner">
        Created by Taesung Hwang for ICS 46. Inspiration and reference code provided by Professor Shindler.
      </div>

    </div>
  );
}

export default App;
