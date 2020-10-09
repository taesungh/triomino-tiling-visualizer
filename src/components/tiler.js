import React, { useState, useEffect } from 'react';
import Point from "../services/point";
import tileTriominoes from "../services/triominoes";
import Grid from "./grid";
import "./tiler.css";


const Tiler = function () {
  const [n, setN] = useState(1);
  const [tiles, setTiles] = useState([]);

  const tileGrid = (x, y) => {
    setIndex(-1);
    setTiles(tileTriominoes(new Point(0, 0), n, new Point(x, y)));
  };

  const setDimension = (dim) => {
    setN(dim);
    setTiles([]);
    setIndex(-1);
  };

  const [index, setIndex] = useState(-1);


  return (
    <div className="tiler">
      <h4>Click on any cell to start the visualization</h4>

      <div className="btn-group" role="group" aria-label="grid size selection">
        {[1, 2, 3, 4, 5, 6].map((i) => {
          let size = Math.pow(2, i);
          let active = n === i;
          return <button type="button" onClick={() => setDimension(i)} aria-pressed={active} key={i}>{size} &times; {size}</button>
        })}
      </div>

      <Grid n={n} tiles={tiles} tileGrid={tileGrid} index={index} />

    </div>
  );
}

export default Tiler;
