import React from 'react';
import './Cell.css';

const Cell = (props) => {
  return (
    <div className={props.className} onClick={props.onCellClick}>
      <span className="Item">{props.hasItem === true ? 'o' : ''}</span>
    </div>
  );
};

export default Cell;