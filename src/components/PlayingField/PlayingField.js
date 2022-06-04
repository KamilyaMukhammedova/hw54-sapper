import React from 'react';
import Cell from "../Cell/Cell";

const PlayingField = (props) => {
  return props.cells.map(cell => (
    <Cell
      key={cell.id}
      hasItem={cell.hasItem}
    />
  ));
};

export default PlayingField;