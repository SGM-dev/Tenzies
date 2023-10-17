import React from "react";

export function Score(props) {
  const minutes = Math.floor((props.currentTime % 360000) / 6000);
  const seconds = Math.floor((props.currentTime % 6000) / 100);
  const bestTime = props.bestScore["bestTime"];
  const leastRolls = props.bestScore["leastRolls"];

  const bestMinutes = Math.floor((bestTime % 360000) / 6000);
  const bestSeconds = Math.floor((bestTime % 6000) / 100);

  return (
    <div className="score-container">
      <div className="current-score">
        <p className="current-rolls">Current Rolls: {props.currentRolls}</p>
        <p className="current-time">
          Current Time: {minutes.toString().padStart(2, "0")} :{" "}
          {seconds.toString().padStart(2, "0")}
        </p>
      </div>
      <div className="best-score">
        <p className="least-rolls">Least Rolls: {leastRolls}</p>
        <p className="best-time">
          Best Time: {bestMinutes.toString().padStart(2, "0")} :{" "}
          {bestSeconds.toString().padStart(2, "0")}
        </p>
      </div>
    </div>
  );
}
