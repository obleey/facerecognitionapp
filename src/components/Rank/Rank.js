import React from 'react';

const Rank = (props) => {
  const { name, entries } = props;
  return (
    <div>
      <div className="black f3">{`${name} your current rank is....`}</div>
      <div className="black f1">{entries}</div>
    </div>
  );
};

export default Rank;
