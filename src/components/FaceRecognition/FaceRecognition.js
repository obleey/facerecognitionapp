import React from 'react';

const FaceRecognition = ({ imageLink }) => {
  return (
    <div className="center ma">
      <div className="absolute mt2">
        <img src={imageLink} alt="" width="500px" height="auto" />
      </div>
    </div>
  );
};

export default FaceRecognition;
