import Point from "./point";

/*
  Coordinate system will use canvas style
    x-axis is off to right
    y-axis is downwards
    quadrant I is top left and counting clockwise
*/

// structure of utility functions adapted from Professor Shindler


// returns a list of the tiles used to tile the grid around the missing piece
// types 1, 2, 3, and 4 denote the corner piece (opposite the missing piece)
// type 5 denotes a temporary hole used to recursively divide quadrants
function tileTriominoes(topLeft, n, missingPiece) {
  const tiles = [];
  const placeTile = (type, location) => {
    tiles.push([type, location.x, location.y]);
  }

  placeTile(0, missingPiece);
  solveTiling(topLeft, n, missingPiece);

  return tiles;

  // recursively solves the tiling by spliting the current quadrant
  // into four subquadrants and tiling each one
  function solveTiling(topLeft, n, missingPiece) {
    if (n === 0) {
      // cannot tile an empty grid
      return
    }
    else if (n === 1) {
      // 2x2 grid has one tile
      if (missingPiece.equals(topLeft)) {
        placeTile(3, missingPiece);
      }
      else if (missingPiece.isToRightOf(topLeft)) {
        placeTile(4, missingPiece);
      }
      else if (missingPiece.isBelow(topLeft)) {
        placeTile(2, missingPiece);
      }
      else {  // missingPiece.isToLeftOf(topLeft)
        placeTile(1, missingPiece);
      }
    }
    else { // n > 1
      let q_missing = _getQuadrantOfPiece(topLeft, n, missingPiece);
      for (let q = 1; q <= 4; ++q) {
        let newMissing = q !== q_missing ? _getInternalCorner(topLeft, n, q) : missingPiece;
        if (q !== q_missing) {
          placeTile(5, newMissing);
        }
        solveTiling(_getTopLeftOfQuadrant(topLeft, n, q), n-1, newMissing);
      }

      let q_opposite = (q_missing + 2 - 1) % 4 + 1;
      placeTile(q_opposite, _getInternalCorner(topLeft, n, q_missing));
    }
  }
}

// returns which quadrant a piece is located in
function _getQuadrantOfPiece(topLeft, n, piece) {
  let xBoundary = topLeft.x + Math.pow(2, n - 1) - 1;
  let yBoundary = topLeft.y + Math.pow(2, n - 1) - 1;

  if (piece.x <= xBoundary && piece.y <= yBoundary) {
    return 1;
  }
  else if (piece.x <= xBoundary) {
    return 4;
  }
  else if (piece.y <= yBoundary) {
    return 2;
  }
  else {
    return 3;
  }
}

// returns the top left of quadrant q on a grid with size n and top left piece
function _getTopLeftOfQuadrant(topLeft, n, quadrant) {
  let adj = Math.pow(2, n - 1);
  if (quadrant === 1) {
    return topLeft;
  }
  else if (quadrant === 2) {
    return new Point(topLeft.x + adj, topLeft.y);
  }
  else if (quadrant === 4) {
    return new Point(topLeft.x, topLeft.y + adj);
  }
  else { // quadrant === 3
    return new Point(topLeft.x + adj, topLeft.y + adj);
  }
}

// returns the point in the specified quadrant closest to the center
// of the grid with size n and top left piece
function _getInternalCorner(topLeft, n, quadrant) {
  let xAdj = topLeft.x + Math.pow(2, n - 1) - 1;
  let yAdj = topLeft.y + Math.pow(2, n - 1) - 1;
  if (quadrant === 1) {
    return new Point(xAdj, yAdj);
  }
  else if (quadrant === 2) {
    return new Point(xAdj + 1, yAdj);
  }
  else if (quadrant === 4) {
    return new Point(xAdj, yAdj + 1);
  }
  else { // quadrant === 3
    return new Point(xAdj + 1, yAdj + 1);
  }
}

export default tileTriominoes;
