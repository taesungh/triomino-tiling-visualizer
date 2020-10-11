import React, { useState, useEffect, useRef } from 'react';
import { classNames } from "../services/util";
import "./grid.css";


const Grid = function ({n, tiles, tileGrid, index}) {
  const eK = function (i, j) {
    const size = Math.pow(2, n);
    return size * (i + 1) + j;
  }
  const genGrid = (size) => {
    const grid = [];
    for (let i = 0; i < size; ++i) {
      grid[i] = new Array(size);
      for (let j = 0; j < size; ++j) {
        grid[i][j] = <td className="cell" onClick={() => tileGrid(j, i)} key={eK(i, j)}/>;
      }
    }
    return grid;
  };

  const [grid, setGrid] = useState(genGrid(2));
  useEffect(() => {
    setGrid(genGrid(Math.pow(2, n)));
  }, [n]);

  const inputGridTile = function (type, x, y, index) {
    switch (type) {
      case 0:
        grid[y][x] = <td key={eK(y, x)} className="cell cell-0" />;
        break;
      case 5:
        grid[y][x] = <td key={eK(y, x)} className="cell cell-5" />;
        break;
      case 3:
        grid[y][x + 1] = <td key={eK(y, x+1)} className="cell cell-1 cell-N"/>;
        grid[y + 1][x] = <td key={eK(y+1, x)} className="cell cell-1 cell-W" />;
        grid[y+1][x+1] = <td key={eK(y+1, x+1)} className="cell cell-1 cell-SE" />;
        break;
      case 4:
        grid[y][x - 1] = <td key={eK(y, x-1)} className="cell cell-2 cell-N"/>;
        grid[y + 1][x] = <td key={eK(y+1, x)} className="cell cell-2 cell-E"/>;
        grid[y+1][x-1] = <td key={eK(y+1, x-1)} className="cell cell-2 cell-SW"/>;
        break;
      case 1:
        grid[y][x - 1] = <td key={eK(y, x-1)} className="cell cell-3 cell-S"/>;
        grid[y - 1][x] = <td key={eK(y-1, x)} className="cell cell-3 cell-E"/>;
        grid[y-1][x-1] = <td key={eK(y-1, x-1)} className="cell cell-3 cell-NW"/>;
        break;
      case 2:
        grid[y][x + 1] = <td key={eK(y, x+1)} className="cell cell-4 cell-S"/>;
        grid[y - 1][x] = <td key={eK(y-1, x)} className="cell cell-4 cell-W"/>;
        grid[y-1][x+1] = <td key={eK(y-1, x+1)} className="cell cell-4 cell-NE"/>;
        break;
      default:
        break;
    }
  }


  const [lastIndex, setLastIndex] = useState(index);
  useEffect(() => {
    // console.log("lastIndex, index", lastIndex, index, tiles.length);
    const resetGrid = (grid, size) => {
      for (let i = 0; i < size; ++i) {
        grid[i] = new Array(size);
        for (let j = 0; j < size; ++j) {
          grid[i][j] = <td className="cell" onClick={() => tileGrid(j, i)} key={eK(i, j)}/>;
        }
      }
    };
    const drawTile = function (i) {
      if (i < tiles.length) {
        const [type, x, y] = tiles[i];
        inputGridTile(type, x, y);
      }
    };

    if (lastIndex <= index) {
      for (let i = 1; i < index - lastIndex + 1; ++i) {
        drawTile(lastIndex + i);
      }
    } else {
      resetGrid(grid, Math.pow(2, n));
      // setGrid(genGrid(Math.pow(2, n)));
      for (let i = 0; i <= index; ++i) {
        drawTile(i);
      }
    }
    setLastIndex(index);

  }, [index]);


  const [cellSize, setCellSize] = useState(0);
  const gridRef = useRef(null);
  useEffect(() => {
    const handleResize = () => {
      const gridWidth = gridRef.current.clientWidth;
      // need to subtract twice the cell border width
      setCellSize(`min(${gridWidth / Math.pow(2, n) - 3}px, ${15 / Math.pow(2, n) + 1}rem)`)
    };

    handleResize();
    window.addEventListener('resize', handleResize);

    // auto clean-up when no longer used
    return () => {
      window.removeEventListener('resize', handleResize);
    }
  }, [n]);

  const gridStyle = {
    "--cell-width": cellSize,
    "--cell-height": cellSize
  };

  return (
    <div className="grid" ref={gridRef}>
    <table className="grid-table fade-in" style={gridStyle} key={n}>
        <tbody>
          {grid.map((row, i) => (
            <tr key={i}>
              {row}
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}

export default Grid;
