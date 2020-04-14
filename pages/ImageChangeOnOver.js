import React, { useRef } from "react";
import ImageToggleOnOver from "../src/ImageToggleOnOver";

const ImageChangeOnOver = () => {
  return (
    <div>
      <ImageToggleOnOver
        primaryImg="/static/speakers/bw/Speaker-187.jpg"
        secondImg="/static/speakers/Speaker-187.jpg"
      />
      &nbsp;&nbsp;&nbsp;&nbsp;
      <ImageToggleOnOver
        primaryImg="/static/speakers/bw/Speaker-823.jpg"
        secondImg="/static/speakers/Speaker-823.jpg"
      />
    </div>
  );
};

export default ImageChangeOnOver;
