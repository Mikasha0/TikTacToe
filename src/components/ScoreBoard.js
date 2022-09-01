import React from "react";
import "./ScoreBoard.css";

export default function ScoreBoard({ score, xPlaying }) {
  const { xScore, oScore } = score;
  return (
    <>
      <div className="container text-center">
        <h1>TicTacToe</h1>
      </div>
      <div className="scoreboard">
        <span className={`score x-score ${!xPlaying && "inactive"}`}>
          X - {xScore}
        </span>
        <span className={`score x-score ${xPlaying && "inactive"}`}>
          O - {oScore}
        </span>
      </div>
    </>
  );
}
