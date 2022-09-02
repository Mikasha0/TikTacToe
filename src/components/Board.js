import React from "react";
import Box from "./Box";
import { useState } from "react";

export default function Board() {
  const [box, setBox] = useState(Array(9).fill(null));

  const [X, setX] = useState(true);

  const renderSquare = (num) => {
    return (
      <Box
        mark={box[num]}
        Click={() => {
          handleClick(num);
        }}
      />
    );
  };

  const handleClick = (num) => {
    const square = box.slice();
    if (square[num] === null) {
      square[num] = X ? "X" : "O";
      setBox(square);
      setX(!X);
    } else {
      alert("Sorry! can't do that.");
    }
  };

  const calculateWinner = (box) => {
    const lines = [
      [0, 1, 2],
      [3, 4, 5],
      [6, 7, 8],
      [0, 3, 6],
      [1, 4, 7],
      [2, 5, 8],
      [0, 4, 8],
      [2, 4, 6],
    ];
    for (let i = 0; i < lines.length; i++) {
      const [a, b, c] = lines[i];

      if (box[a] && box[a] === box[b] && box[b] === box[c]) {
        return box[a];
      }
    }  
    return null;
  };

  const winner = calculateWinner(box);
  let status;
  if(winner){
    status = 'winner :' + winner;   
  }else{
    status = 'Player turn :' + (X?'X':'O')
  }

  return (
    <>
      <div className="board text-center my-5">
        <div className="board-row">
          {renderSquare(0)}
          {renderSquare(1)}
          {renderSquare(2)}
        </div>
        <div className="board-row">
          {renderSquare(3)}
          {renderSquare(4)}
          {renderSquare(5)}
        </div>
        <div className="board-row">
          {renderSquare(6)}
          {renderSquare(7)}
          {renderSquare(8)}
        </div>
        <h6>{status}</h6>
      </div>
    </>
  );
}
