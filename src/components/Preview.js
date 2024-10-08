import "./Preview.css";
import React from "react";

import { buildBoard } from "../utils/buildBoard";
import { transferToBoard } from "../utils/Tetrominoes";

import BoardCell from "../components/BoardCell";

const Preview = ({ tetromino, index }) => {
  const { shape, className } = tetromino;

  const board = buildBoard({ rows: 4, columns: 4 });

  const style= { top: `${index * 10}vw` };

  board.rows = transferToBoard({
    className,
    isOccupied: false,
    position: { row: 0, column: 0 },
    rows: board.rows,
    shape
  });

  return (
    <div className="preview" style={style}>
      <div className="preview-board">
        {board.rows.map((row, y) => 
          row.map((cell, x) => (
            <BoardCell key={x * board.size.columns + x} cell={cell} />
          ))
        )}
      </div>
    </div>
  );
};

export default React.memo(Preview);