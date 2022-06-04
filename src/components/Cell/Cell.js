import React from 'react';

const Cell = (props) => {
  return (
    <div className="Cell">
      <span className="Item">{props.hasItem ? 'o' : ''}</span>
    </div>
  );
};

export default Cell;