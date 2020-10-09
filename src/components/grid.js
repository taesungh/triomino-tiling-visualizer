import React, { useState, useEffect } from 'react';
import "./grid.css";


const Grid = function ({n, tiles, tileGrid, index}) {
  const genGrid = (size) => {
    const grid = [];
    for (let i = 0; i < size; ++i) {
      grid[i] = new Array(size);
      for (let j = 0; j < size; ++j) {
        grid[i][j] = <td className="cell" onClick={() => tileGrid(j, i)}/>;
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
        grid[y][x] = <td className="cell cell-0" />;
        break;
      case 5:
        grid[y][x] = <td className="cell cell-5" />;
        break;
      case 3:
        grid[y][x + 1] = <td className="cell cell-1 cell-N"/>;
        grid[y + 1][x] = <td className="cell cell-1 cell-W" />;
        grid[y+1][x+1] = <td className="cell cell-1 cell-SE" />;
        break;
      case 4:
        grid[y][x - 1] = <td className="cell cell-2 cell-N"/>;
        grid[y + 1][x] = <td className="cell cell-2 cell-E"/>;
        grid[y+1][x-1] = <td className="cell cell-2 cell-SW"/>;
        break;
      case 1:
        grid[y][x - 1] = <td className="cell cell-3 cell-S"/>;
        grid[y - 1][x] = <td className="cell cell-3 cell-E"/>;
        grid[y-1][x-1] = <td className="cell cell-3 cell-NW"/>;
        break;
      case 2:
        grid[y][x + 1] = <td className="cell cell-4 cell-S"/>;
        grid[y - 1][x] = <td className="cell cell-4 cell-W"/>;
        grid[y-1][x+1] = <td className="cell cell-4 cell-NE"/>;
        break;
      default:
        break;
    }
  }


  useEffect(() => {
    if (index >= 0) {
      const [type, x, y] = tiles[index];
      inputGridTile(type, x, y);
    }
  }, [index]);


  return (
    <div className="grid">
    <table className="grid-table">
        <tbody>
          {grid.map((row, i) => (
            <tr>
              {row}
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}

export default Grid;
