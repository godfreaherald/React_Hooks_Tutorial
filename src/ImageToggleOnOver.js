import React, { useRef } from "react";

const ImageToggleOnOver = ({ primaryImg, secondImg }) => {
  const imgRef = useRef(null);
  return (
    <img
      ref={imgRef}
      onMouseOver={() => {
        imgRef.current.src = secondImg;
      }}
      onMouseOut={() => {
        imgRef.current.src = primaryImg;
      }}
      src={primaryImg}
      alt=""
    />
  );
};

export default ImageToggleOnOver;
