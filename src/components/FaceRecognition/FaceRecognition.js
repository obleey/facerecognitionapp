import React from 'react';

const FaceRecognition = ({ imageLink }) => {
  return (
    <div className="center">
      <img src={imageLink} alt="" />
    </div>
  );
};

export default FaceRecognition;
