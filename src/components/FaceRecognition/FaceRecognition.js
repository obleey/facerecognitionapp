import React from 'react';
import './FaceRecognition.css';

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
      <div
        className="bounding-box"
        style={{
          top: box.topRow,
          right: box.righCol,
          bottom: box.bottomRow,
          left: box.leftCol,
        }}
      ></div>
    </div>
  );
};

export default FaceRecognition;
