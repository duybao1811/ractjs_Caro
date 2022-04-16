import React from "react";

export default function Cell(props) {
  return props.isWin ? (
    <button className="cell cell-highlight" onClick={props.onClick}>
      {props.value}
    </button>
  ) : (
    <button className="cell" onClick={props.onClick}>
      {props.value}
    </button>
  );
}
