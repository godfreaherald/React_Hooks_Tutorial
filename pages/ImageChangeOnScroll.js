import React, { useRef } from "react";
import ImageToggleOnScroll from "../src/ImageToggleOnScroll";

const ImageChangeOnScroll = () => {
  return (
    <div>
      {[187, 823, 1124, 1269, 1530].map((speakerId) => {
        return (
          <div key={speakerId}>
            <ImageToggleOnScroll
              primaryImg={`/static/speakers/bw/Speaker-${speakerId}.jpg`}
              secondImg={`/static/speakers/Speaker-${speakerId}.jpg`}
            />
          </div>
        );
      })}
    </div>
  );
};

export default ImageChangeOnScroll;
