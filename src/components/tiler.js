import React, { useState, useEffect } from 'react';
import Point from "../services/point";
import tileTriominoes from "../services/triominoes";
import { classNames } from "../services/util";
import Grid from "./grid";
import Controls from "./controls";
import "./tiler.css";


const Tiler = function () {
  const [n, setN] = useState(1);
  const [tiles, setTiles] = useState([]);
  const [running, setRunning] = useState(false);
  const [speed, setSpeed] = useState(5);

  const baseSpeed = 1000; // ms

  const tileGrid = (x, y) => {
    setIndex(-1);
    setTiles(tileTriominoes(new Point(0, 0), n, new Point(x, y)));
    setRunning(true);
  };

  const setDimension = (dim) => {
    setRunning(false);
    setN(dim);
    setTiles([]);
    setIndex(-1);
  };

  const [index, setIndex] = useState(-1);
  useEffect(() => {
    if (running) {
      if (index === tiles.length - 1) {
        setRunning(false);
      } else {
        setTimeout(() => {
          setIndex((i) => {
            return i === index ? i + 1 : i;
          });
        }, baseSpeed / speed);
      }
    }
  }, [running, index]);


  const maxIndex = tiles.length - 1;
  const controlsProps = { running, setRunning, index, setIndex, maxIndex, speed, setSpeed };


  return (
    <div className="tiler">
      <h4>Click on any cell to start the visualization</h4>

      <div className="btn-group" role="group" aria-label="grid size selection">
        {[1, 2, 3, 4, 5, 6].map((i) => {
          let size = Math.pow(2, i);
          let active = n === i;
          let buttonClasses = classNames({
            "btn": true,
            "active": active
          });
          return <button type="button" className={buttonClasses} onClick={() => setDimension(i)} aria-pressed={active} key={i}>{size} &times; {size}</button>
        })}
      </div>

      <Grid n={n} tiles={tiles} tileGrid={tileGrid} index={index} />

      <Controls {...controlsProps} />

    </div>
  );
}

export default Tiler;
