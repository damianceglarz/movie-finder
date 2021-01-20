import React from 'react';
import PropTypes from 'prop-types';

import cssClasses from './Input.module.scss';

const Input = (props) => (
    <input {...props}  className={cssClasses.input}/>
)

export default Input;

Input.propTypes = {
    type: PropTypes.string.isRequired,
    value: PropTypes.string,
    onChange: PropTypes.func
};