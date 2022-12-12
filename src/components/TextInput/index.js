import { Input } from "@nextui-org/react";
import PropTypes from "prop-types";

const TextInput = (props) => {
  return (
    <Input
      placeholder={props.placeholder}
      disabled={props.disabled}
      clearable={props.clearable}
      label={props.label}
      labelPlaceholder={props.labelPlaceholder}
      size={props.size}
      bordered={props.bordered}
      underlined={props.underlined}
      rounded={props.rounded}
      status={props.status}
      shadow={props.shadow}
      type={props.type}
    />
  );
};

TextInput.propTypes = {
  placeholder: PropTypes.string,
  disabled: PropTypes.bool,
  clearable: PropTypes.bool,
  label: PropTypes.string,
  labelPlaceholder: PropTypes.string,
  size: PropTypes.string,
  bordered: PropTypes.bool,
  underlined: PropTypes.bool,
  rounded: PropTypes.bool,
  status: PropTypes.string,
  shadow: PropTypes.bool,
  type: PropTypes.string,
};

TextInput.defaultProps = {
  placeholder: undefined,
  disabled: false,
  clearable: false,
  label: undefined,
  labelPlaceholder: undefined,
  size: "md",
  bordered: false,
  underlined: false,
  rounded: false,
  status: undefined,
  shadow: false,
  type: "text",
};

export default TextInput;
