import { Button } from "@nextui-org/react";
import PropTypes from "prop-types";
// import "./styles.scss";

const NormalButton = (props) => {
  return (
    <Button
      disabled={props.disabled}
      size={props.size}
      color={props.color}
      shadow={props.shadow}
      bordered={props.bordered}
      rounded={props.rounded}
      ghost={props.ghost}
      flat={props.flat}
      light={props.light}
      icon={props.icon}
      iconRight={props.iconRight}
    >
      {props.buttonName}
    </Button>
  );
};

NormalButton.propTypes = {
  buttonName: PropTypes.string,
  disabled: PropTypes.bool,
  size: PropTypes.string,
  color: PropTypes.string,
  shadow: PropTypes.bool,
  bordered: PropTypes.bool,
  rounded: PropTypes.bool,
  ghost: PropTypes.bool,
  flat: PropTypes.bool,
  light: PropTypes.bool,
  icon: PropTypes.element,
  iconRight: PropTypes.element,
};

NormalButton.defaultProps = {
  buttonName: undefined,
  disabled: false,
  size: "md",
  color: "primary",
  shadow: false,
  bordered: false,
  rounded: false,
  ghost: false,
  flat: false,
  light: false,
  icon: undefined,
  iconRight: undefined,
};

export default NormalButton;
