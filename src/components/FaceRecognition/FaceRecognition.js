import React from 'react';

const FaceRecognition = ({ box, imageLink }) => {
  return (
    <div className="center ma">
      <div className="absolute mt2">
        <img
          id="inputImage"
          src={imageLink}
          alt=""
          width="500px"
          height="auto"
        />
      </div>
    </div>
  );
};

export default FaceRecognition;
