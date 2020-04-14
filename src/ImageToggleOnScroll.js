import React, { useRef, useState, useEffect } from "react";

const ImageToggleOnScroll = ({ primaryImg, secondImg }) => {
  const imgRef = useRef(null);

  const [inView, setInView] = useState(false);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    window.addEventListener("scroll", scrollHandler);
    setInView(isInView());
    setLoading(false);
    return () => window.removeEventListener("scroll", scrollHandler);
  }, [loading]);

  const isInView = () => {
    if (imgRef.current) {
      const rect = imgRef.current.getBoundingClientRect();
      return rect.top >= 0 && rect.bottom <= window.innerHeight;
    }
  };

  const scrollHandler = () => {
    setInView(() => isInView());
  };

  return loading ? null : (
    <img ref={imgRef} src={inView ? secondImg : primaryImg} alt="" />
  );
};

export default ImageToggleOnScroll;
