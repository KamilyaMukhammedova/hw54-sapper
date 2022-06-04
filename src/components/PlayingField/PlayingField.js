import React from 'react';
import Cell from "../Cell/Cell";
import './PlayingField.css';

const PlayingField = (props) => {
  return props.cells.map(cell => (
    <Cell
      key={cell.id}
      onCellClick={() => props.onCellClick(cell.id)}
      className={cell.isClicked === true ? 'Cell White' : 'Cell Grey'}
      hasItem={cell.hasItem}
    />
  ));
};

export default PlayingField;