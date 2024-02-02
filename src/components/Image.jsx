import React from "react";

function Image({
  src,
  alt,
  className,
  imgWidth,
  imgDisplay,
  imgHeight,
  imgObjectFit,
  right,
}) {
  return (
    <img
      src={src}
      alt={alt}
      className={className}
      style={{
        width: imgWidth,
        display: imgDisplay,
        height: imgHeight,
        objectFit: imgObjectFit,
        right: right,
      }}
    />
  );
}

export default Image;
