import React from 'react';
import './Try.css';

const Try = ({tries}) => {
  return (
    <div className="Tries">
      <p>Tries: {tries}</p>
    </div>
  );
};

export default Try;