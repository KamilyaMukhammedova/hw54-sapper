import React from 'react';

const ResetBtn = ({onReset}) => {
  return (
    <div>
      <button onClick={onReset}>Reset</button>
    </div>
  );
};

export default ResetBtn;