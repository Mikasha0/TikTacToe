import React from "react";
import Box from "./Box";
import "./Board.css";

export default function Board({ board1 , onClick}) {
  return (
    <>
      <div className="board">
        {board1.map((value, idx) => {
          return <Box value={value} onClick={()=>value ===null && onClick(idx)} />;
        })}
      </div>
    </>
  );
}
