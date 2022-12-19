import React from "react";
import { Image } from "@nextui-org/react";
import PropTypes from "prop-types";

const ImageComponent = (props) => {
  return (
    <Image
      width={props.width}
      height={props.height}
      src={props.src}
      alt={props.alt}
      objectFit={props.objectFit}
      className={props.className}
    />
  );
};

ImageComponent.propTypes = {
  className: PropTypes.string,
  width: PropTypes.string,
  height: PropTypes.string,
  src: PropTypes.string,
  alt: PropTypes.string,
  objectFit: PropTypes.string,
};

ImageComponent.defaultProps = {
  className: "",
  width: "320",
  height: "180",
  src: "https://github.com/nextui-org/nextui/blob/next/apps/docs/public/nextui-banner.jpeg?raw=true",
  alt: "Default Image",
  objectFit: "cover",
};

export default ImageComponent;
