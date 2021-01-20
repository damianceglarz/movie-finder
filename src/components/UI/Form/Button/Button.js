import React from "react";
import PropTypes from "prop-types";

import cssClasses from "./Button.module.scss";

const Button = ({ btnType, click, children }) => (
  <button
    onClick={click}
    className={[cssClasses.button, cssClasses[btnType]].join(" ")}
  >
    {children}
  </button>
);

export default Button;

Button.propTypes = {
  click: PropTypes.func.isRequired,
  btnType: PropTypes.oneOf(["default", "success", "danger"]).isRequired,
};
