import React, { useState } from "react";
import Cell from "../cell/cell";
import "./board.scss";
import { creatBoarder } from "./boardHelper.js";

const Board = () => {
  let nrows = 5;
  let ncols = 5;

  const [board, setBoard] = useState(creatBoarder());
  const [Clicked, setClicked] = useState(false);
  const [hasWon, setHasWon] = useState(false);
  const flipCellsAround = (coord) => {
    let boardEl = board;
    let [y, x] = coord.split("-").map(Number);

    function flipCell(y, x) {
      if (x >= 0 && x < ncols && y >= 0 && y < nrows) {
        boardEl[y][x] = !boardEl[y][x];
      }
    }
    flipCell(y, x);
    flipCell(y, x - 1);
    flipCell(y, x + 1);
    flipCell(y - 1, x);
    flipCell(y + 1, x);

    let hasWon = board.every((row) => row.every((cell) => !cell));

    setHasWon(hasWon);
    setBoard(boardEl);
  };

  const MakeTable = () => {
    let tblBoard = [];
    for (let y = 0; y < nrows; y++) {
      let row = [];
      for (let x = 0; x < ncols; x++) {
        let coord = `${y}-${x}`;
        row.push(
          <Cell
            key={coord}
            cellLit={board[y][x]}
            flipCell={() => {
              flipCellsAround(coord);
              setClicked(!Clicked);
            }}
          />
        );
      }
      tblBoard.push(<tr key={y}>{row}</tr>);
    }
    return (
      <table className="board">
        <tbody>{tblBoard}</tbody>
      </table>
    );
  };

  return (
    <div>
      {hasWon ? (
        <div className="winner">
          <span className="neon-orange">YOU</span>
          <span className="neon-blue">WIN!</span>
        </div>
      ) : (
        <div>
          <div className="Board-title">
            <div className="neon-orange">Lights</div>
            <div className="neon-blue">Out</div>
          </div>
          {MakeTable()}
        </div>
      )}
    </div>
  );
};

export default Board;
